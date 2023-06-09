import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000"
})

export const fetchStations = async (page, limit, sortBy, sortByOrder) => {
    try {
        const res = await api.get(`/api/stations?page=${page - 1}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortByOrder}`);
        return res.data;
    } catch (error) {
        throw new Error("Error while fetching stations data");
    }
}
export const fetchSearchStations = async (page, limit, sortBy, sortByOrder, search) => {
    try {
        const res = await api.get(`/api/stations?page=${page - 1}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortByOrder}&search=${search}`);
        return res.data;
    } catch (error) {
        throw new Error("Error while fetching stations data");
    }
}

export const fetchAllStationCount = async () => {
    try {
        const res = await api.get(`/api/stations/totalcount`);
        return res.data;
    } catch (error) {
        throw new Error("Error while fetching stations data");
    }
}

export const fetchStation = async (id) => {
    try {
        const res = await api.get(`/api/stations/${id}`);
        return res.data;
    } catch (error) {
        throw new Error("Error while fetching station data");
    }
}

export const fetchStationCoordinates = async (id) => {
    try {
        const res = await api.get(`/api/stations/${id}/coordinates`);
        return res.data;
    } catch (error) {
        throw new Error("Error while fetching station coordinates data");
    }
}

export const fetchAllStationCoordinates = async () => {
    try {
        const res = await api.get(`/api/stations/coordinates`);
        return res.data;
    } catch (error) {
        throw new Error("Error while fetching station coordinates data")
    }
}

export const fetchJourneys = async (page, limit, sortBy, sortByOrder) => {
    try {
        const res = await api.get(`/api/journeys?page=${page - 1}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortByOrder}`);
        return res.data;
    } catch (error) {
        throw new Error("Error while fetching journeys data");
    }
}

export const fetchJourney = async (id) => {
    try {
        const res = await api.get(`/api/journeys/${id}`);
        return res.data;
    } catch (error) {
        throw new Error("Error while fetching journey data");
    }
}

export const fetchJourneyCount = async () => {
    try {
        const res = await api.get(`/api/journeys/totalcount`);
        return res.data;
    } catch (error) {
        throw new Error("Error while fetching count data");
    }
}

export const fetchSearchJourneys = async (page, limit, sortBy, sortByOrder, search) => {
    try {
        const res = await api.get(`/api/journeys?page=${page - 1}&limit=${limit}&sortBy=${sortBy}&sortByOrder=${sortByOrder}&search=${search}`);
        return res.data;
    } catch (error) {
        throw new Error("Error while fetching journey data");
    }
}

export const fetchLongestDistance = async () => {
    try {
        const res = await api.get(`/api/journeys/longestdistance`);
        return res.data;
    } catch (error) {
        throw new Error("Error while fetching journey data");
    }
}

export const fetchLongestDuration = async () => {
    try {
        const res = await api.get(`/api/journeys/longestduration`);
        return res.data;
    } catch (error) {
        throw new Error("Error while fetching journey data");

    }
}