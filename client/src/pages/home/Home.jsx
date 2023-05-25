import React, { useState, useEffect } from 'react';
import HomeMap from '../../components/homeMap/HomeMap';
import { fetchAllStationCoordinates } from "../../utils/api";
import "./Home.css"

const Home = () => {
    const [allStationCoordinates, setAllStationCoordinates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchAllStationCoordinates();
                setAllStationCoordinates(res);
            } catch (error) {
                console.error("Error while fetching stations data:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className='container'>
            <h1 className='headline'>Helsinki Bike</h1>
            <div className='stats'>
                <h3>Matkoja</h3>
            </div>
            <HomeMap stations={allStationCoordinates} />
        </div>
    )
}

export default Home