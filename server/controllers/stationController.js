import Station from "../models/station.js";
import Journey from "../models/journey.js";

export const allStations = async (req, res) => {
    const { page = 0, limit = 20, sortBy = "departureTime", sortOrder = "asc", search } = req.query;
    try {
        const regex = new RegExp(search, "i");
        const totalCount = await Station.countDocuments({
        }).exec();
        const sortObj = {};
        sortObj[sortBy] = sortOrder === 'desc' ? -1 : 1;
        const stations = await Station.find({
            $or: [
                { nimi: regex },
                { namn: regex },
                { name: regex },
                { osoite: regex },
                { address: regex },
                { kaupunki: regex },
                { stad: regex },
            ],
        })
            .skip(page * limit)
            .limit(limit)
            .sort(sortObj)
            .exec();
        res.status(200).json({ totalCount, stations });
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