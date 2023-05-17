import Journey from "../models/journey.js";

export const allJourneys = async (req, res) => {
    const { page = 0, limit = 20, sortBy = "departureTime", sortOrder = "asc" } = req.query;

    try {
        const totalCount = await Journey.countDocuments({
        }).exec();
        const sortObj = {};
        sortObj[sortBy] = sortOrder === 'desc' ? -1 : 1;
        const journeys = await Journey.find()
            .skip(page * limit)
            .limit(limit)
            .sort({ [sortBy]: 1 })
            .exec();
        res.status(200).json({ totalCount, journeys });
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