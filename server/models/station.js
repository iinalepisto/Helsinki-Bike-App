import mongoose from "mongoose";

const stationSchema = new mongoose.Schema({
    fId: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    nimi: {
        type: String,
        required: true
    },
    namn: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    osoite: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    kaupunki: {
        type: String,
        required: true
    },
    stad: {
        type: String,
        required: true
    },
    operaattor: {
        type: String
    },
    kapasiteet: {
        type: Number
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    journeysFromStation: {
        type: Number,
    },
    journeysToStations: {
        type: Number,
    },
})

const Station = mongoose.model("Station", stationSchema);

export default Station;