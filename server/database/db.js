import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import readJourneyFiles from "./importJourneyData.js";
import readStationFiles from "./importStationData.js";

dotenv.config();
const url = process.env.MONGO_URL;

const journey1 = path.join(process.cwd(), "../server/csvFiles", "2021-05.csv");
const journey2 = path.join(process.cwd(), "../server/csvFiles", "2021-06.csv");
const journey3 = path.join(process.cwd(), "../server/csvFiles", "2021-07.csv");
const stations = path.join(process.cwd(), "../server/csvFiles", "Helsingin_ja_Espoon_kaupunkipy%C3%B6r%C3%A4asemat_avoin.csv");

//const testStations = path.join(process.cwd(), "../server/csvFiles", "testStations.csv");
//const testJourneys = path.join(process.cwd(), "../server/csvFiles", "testJourneys.csv");


const startMongoDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected");

        await readStationFiles(stations);
        await readJourneyFiles(journey1, journey2, journey3)
    } catch (error) {
        console.error("Error connecting to database ", error);
    }
};

export default startMongoDB;