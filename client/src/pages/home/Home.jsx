import React, { useState, useEffect } from 'react';
import HomeMap from '../../components/homeMap/HomeMap';
import { fetchAllStationCoordinates, fetchJourneyCount, fetchAllStationCount } from "../../utils/api";
import "./Home.css";
import Spinner from '../../components/spinner/Spinner';

const Home = () => {
    const [allStationCoordinates, setAllStationCoordinates] = useState([]);
    const [journeyCount, setJourneyCount] = useState();
    const [stationCount, setStationCount] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const coordinatesRes = await fetchAllStationCoordinates();
                const journeyCountRes = await fetchJourneyCount();
                const stationCountRes = await fetchAllStationCount();
                setAllStationCoordinates(coordinatesRes);
                setJourneyCount(journeyCountRes);
                setStationCount(stationCountRes);
                setIsLoading(false);
                console.log(journeyCountRes);
            } catch (error) {
                console.error("Error while fetching stations data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='container'>
            <h1 className='headline'>Helsinki Bike</h1>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <div className='stats'>
                        <div className='statsBox'>
                            <h3>Tehtyjä matkoja</h3>
                            <p>{journeyCount}</p>
                        </div>
                        <div className='statsBox'>
                            <h3>Asemien määrä</h3>
                            <p>{stationCount}</p>
                        </div>
                        <div className='statsBox'>
                            <h3>Tehtyjä matkoja</h3>
                            <p>{journeyCount}</p>
                        </div>
                        <div className='statsBox'>
                            <h3>Tehtyjä matkoja</h3>
                            <p>{journeyCount}</p>
                        </div>
                    </div>
                    <HomeMap stations={allStationCoordinates} />
                </>
            )}
        </div>
    )
}

export default Home