import Journey from "../models/journey.js";

export const allJourneys = async (req, res) => {
    const {
        page = 0,
        limit = 20,
        sortBy = "departureTime",
        sortOrder = "asc",
        search
    } = req.query;
    try {
        let query = {};
        if (search) {
            const regex = new RegExp(search, "i");
            query = {
                $or: [
                    { departureStationName: regex },
                    { returnStationName: regex },
                ],
            };
        }

        const totalCount = await Journey.countDocuments(query).exec();

        const sortObj = {};
        sortObj[sortBy] = sortOrder === "desc" ? -1 : 1;

        const journeys = await Journey.find(query)
            .skip(page * limit)
            .limit(limit)
            .sort(sortObj)
            .exec();
        res.status(200).json({ totalCount, journeys });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const searchJourneys = async (req, res) => {
    const {
        page = 0,
        limit = 20,
        sortBy = "departureTime",
        sortOrder = "asc",
        search,
        searchBy = "durationSec",
    } = req.query;

    try {
        let query = {};

        if (search) {
            const regex = new RegExp(search, "i");
            if (searchBy === "durationSec") {
                query = { duration: regex };
            } else if (searchBy === "station") {
                query = {
                    $or: [
                        { departureStation: regex },
                        { arrivalStation: regex },
                    ],
                };
            }
        }

        const totalCount = await Journey.countDocuments(query).exec();

        const sortObj = {};
        sortObj[sortBy] = sortOrder === "desc" ? -1 : 1;

        const journeys = await Journey.find(query)
            .skip(page * limit)
            .limit(limit)
            .sort(sortObj)
            .exec();

        res.status(200).json({ totalCount, journeys });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTotalJourneyCount = async (req, res) => {
    try {
        const totalCount = await Journey.countDocuments({}).exec();
        res.status(200).json(totalCount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const singleJourney = async (req, res) => {
    try {
        const journey = await Journey.findById(req.params.id);
        if (!journey) {
            return res.status(404).json({ message: "Journey not found" });
        }
        res.status(200).json(journey);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const findLongestDurationJourney = async (req, res) => {
    try {
        const longestDurationJourney = await Journey.findOne().sort({ durationSec: -1 });
        res.status(200).json(longestDurationJourney);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const findLongestDistanceJourney = async (req, res) => {
    try {
        const longestDistanceJourney = await Journey.findOne().sort({ coveredDistanceM: -1 });
        res.status(200).json(longestDistanceJourney);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}