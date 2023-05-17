import csvParser from "csv-parser";
import fs from "fs";
import Journey from "../models/journey.js";

const importJourneyData = async (file) => {
    console.log(`Starting to import journey data from file ${file}. This may take some time.`);

    const batchSize = 1000;
    let batch = [];
    let invalidDataCount = 0;

    const parser = csvParser({
        delimiter: ',',
        from_line: 2,
        mapHeaders: ({ header }) => {
            switch (header.trim().toLowerCase()) {
                case 'departure':
                    return 'departureTime';
                case 'return':
                    return 'returnTime';
                case 'departure station id':
                    return 'departureStationId';
                case 'departure station name':
                    return 'departureStationName';
                case 'return station id':
                    return 'returnStationId';
                case 'return station name':
                    return 'returnStationName';
                case 'covered distance (m)':
                    return 'coveredDistanceM';
                case 'duration (sec.)':
                    return 'durationSec';
                default:
                    return header;
            }
        }
    });

    fs.createReadStream(file)
        .pipe(parser)
        .on('data', (row) => {
            if (row.durationSec >= 10 && row.coveredDistanceM >= 10) {
                const newJourney = new Journey({
                    departureTime: row.departureTime,
                    returnTime: row.returnTime,
                    departureStationId: row.departureStationId,
                    departureStationName: row.departureStationName,
                    returnStationId: row.returnStationId,
                    returnStationName: row.returnStationName,
                    coveredDistanceM: row.coveredDistanceM,
                    durationSec: row.durationSec,
                });

                batch.push(newJourney);

                if (batch.length >= batchSize) {
                    saveBatch(batch);
                    batch = [];
                }
            } else {
                invalidDataCount++;
            }
        })
        .on('error', (error) => {
            console.error(`Error reading file: ${error.message}`);
            throw new Error(`Error reading file: ${error.message}`);
        })
        .on('end', () => {
            if (batch.length > 0) {
                saveBatch(batch);
            }
            console.log(`Data from file ${file} has been imported to database. There was ${invalidDataCount} invalid rows of data`);
        })

};

const saveBatch = async (batch) => {
    try {
        await Journey.insertMany(batch);
        batch = [];
    } catch (err) {
        throw new Error(`Error saving data: ${err.message}`);
    }
}

const readJourneyFiles = async (file1, file2, file3) => {
    try {
        const isOneJourney = await Journey.findOne({});
        if (isOneJourney === null) {
            await importJourneyData(file1);
            await importJourneyData(file2);
            await importJourneyData(file3);
        } else {
            console.log("Journey data already imported!")
        }
    } catch (error) {
        error.message(`Error while importing journey data: ${error}`);
    }
}

export default readJourneyFiles;