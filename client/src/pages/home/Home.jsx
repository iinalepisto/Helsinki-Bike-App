import React, { useState, useEffect } from 'react';
import HomeMap from '../../components/homeMap/HomeMap';
import { fetchAllStationCoordinates, fetchJourneyCount } from "../../utils/api";
import "./Home.css";
import Spinner from '../../components/spinner/Spinner';

const Home = () => {
    const [allStationCoordinates, setAllStationCoordinates] = useState([]);
    const [journeyCount, setJourneyCount] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const coordinatesRes = await fetchAllStationCoordinates();
                const journeyCountRes = await fetchJourneyCount();
                setAllStationCoordinates(coordinatesRes);
                setJourneyCount(journeyCountRes.totalCount);
                setIsLoading(false);
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
                            <h3>Tehtyjä matkoja</h3>
                            <p>{journeyCount}</p>
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