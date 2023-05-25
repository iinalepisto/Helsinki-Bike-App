import Station from "../models/station.js";
import Journey from "../models/journey.js";

export const allStations = async (req, res) => {
    const { page = 0, limit = 20, sortBy = "nimi", sortOrder = "asc", search } = req.query;
    try {
        let query = {};

        if (search) {
            const regex = new RegExp(search, "i");
            query = {
                $or: [
                    { nimi: regex },
                    { osoite: regex },
                    { kaupunki: regex },
                ],
            };
        }

        const totalCount = await Station.countDocuments(query).exec();

        const sortObj = {};
        sortObj[sortBy] = sortOrder === 'desc' ? -1 : 1;

        const stations = await Station.find(query)
            .skip(page * limit)
            .limit(limit)
            .sort(sortObj)
            .exec();


        res.status(200).json({ totalCount, stations });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const allStationCount = async (req, res) => {
    try {
        const totalCount = await Station.countDocuments({});
        res.status(200).json(totalCount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const singleStation = async (req, res) => {
    try {
        const station = await Station.findOne({ id: req.params.id });
        if (!station) {
            return res.status(404).json({ message: "Station not found" });
        }

        const startingJourneysCount = await Journey.countDocuments({ departureStationId: station.id }).exec();
        const endingJourneysCount = await Journey.countDocuments({ returnStationId: station.id }).exec();
        res.status(200).json({
            ...station.toObject(),
            startingJourneysCount,
            endingJourneysCount,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const stationCoordinates = async (req, res) => {
    try {
        const station = await Station.findOne({ id: req.params.id });
        if (!station) {
            return res.status(404).json({ message: "Station not found" });
        }
        res.status(200).json({ y: station.y, x: station.x });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const allStationsCoordinates = async (req, res) => {
    try {
        const stations = await Station.find({}, { nimi: 1, y: 1, x: 1, id: 1 });
        const coordinates = stations.map(station => ({ nimi: station.nimi, y: station.y, x: station.x, id: station.id })); // Muuntaa tulokset haluttuun muotoon
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}