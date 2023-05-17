import mongoose from "mongoose";

const journeySchema = mongoose.Schema({
    departureTime: {
        type: String,
        required: true
    },
    returnTime: {
        type: String,
        required: true
    },
    departureStationId: {
        type: Number,
        required: true
    },
    departureStationName: {
        type: String,
        required: true
    },
    returnStationId: {
        type: Number,
        required: true
    },
    returnStationName: {
        type: String,
        required: true
    },
    coveredDistanceM: {
        type: Number,
        required: true
    },
    durationSec: {
        type: Number,
        required: true
    },
})

const Journey = mongoose.model("Journey", journeySchema);

export default Journey;