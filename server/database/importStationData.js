import csvParser from "csv-parser";
import fs from "fs";
import Station from "../models/station.js";

const importStationData = async (file) => {
    console.log(`Starting to import data from file ${file}. This may take some time.`);

    let stations = [];

    const parser = csvParser({
        delimiter: ',',
        from_line: 2,
        mapHeaders: ({ header }) => {
            switch (header.trim()) {
                case 'FID':
                    return 'fId';
                case 'ID':
                    return 'id';
                case 'Nimi':
                    return 'nimi';
                case 'Namn':
                    return 'namn';
                case 'Name':
                    return 'name';
                case 'Osoite':
                    return 'osoite';
                case 'Adress':
                    return 'adress';
                case 'Kaupunki':
                    return 'kaupunki';
                case 'Stad':
                    return 'stad';
                case 'Operaattor':
                    return 'operaattor';
                case 'Kapasiteet':
                    return 'kapasiteet';
                case 'x':
                    return 'x';
                case 'y':
                    return 'y';
                default:
                    return header;
            }
        }
    });

    fs.createReadStream(file)
        .pipe(parser)
        .on('data', (row) => {
            if (row.fId >= 111 && row.fId <= 457) {
                row.kaupunki = "Helsinki";
                row.stad = "Helsingfors";
            }
            const newStation = new Station(row);
            stations.push(newStation);
        })
        .on('error', (error) => {
            throw error.message;
        })
        .on('end', async () => {
            await Station.insertMany(stations);
            console.log(`Data from file ${file} has been imported to database.`);
        })
};

const readStationFiles = async (stationFile) => {
    try {
        const isOneStation = await Station.findOne({});
        if (isOneStation === null) {
            await importStationData(stationFile);
        } else {
            console.log("Station data already imported!")
        }
    } catch (error) {
        console.error(`Error while importing station data: ${error}`);
    }
}

export default readStationFiles;