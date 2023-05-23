import React, { useState, useEffect } from 'react';
import { fetchStation } from '../../utils/api';
import Spinner from '../../components/spinner/Spinner';
import StationInfo from '../../components/stationInfo/StationInfo';

const Station = () => {
    const [station, setStation] = useState({});
    const pathParts = window.location.pathname.split('/');
    const id = pathParts[2];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchStation(id);
                setStation(res);
            } catch (error) {
                console.error("Error while fetching station data:", error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div>
            {Object.keys(station).length === 0 ? (<Spinner />) : (<StationInfo station={station} />)}
        </div>
    )
}

export default Station