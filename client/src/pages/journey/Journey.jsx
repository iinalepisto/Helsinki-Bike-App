import React, { useState, useEffect } from 'react';
import { fetchJourney } from '../../utils/api';
import Spinner from '../../components/spinner/Spinner';
import JourneyInfo from '../../components/journeyInfo/JourneyInfo';
import JourneyMap from '../../components/journeyMap/JourneyMap';

const Journey = () => {
    const [journey, setJourney] = useState({});
    const pathParts = window.location.pathname.split('/');
    const id = pathParts[2];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchJourney(id);
                setJourney(res);
            } catch (error) {
                console.error("Error while fetching journey data:", error);
            }
        };
        fetchData();
    }, [id]);
    return (
        <>
            {Object.keys(journey).length === 0 ?
                (<Spinner />) : (
                    <div className='pageContainer'>
                        <JourneyInfo journey={journey} />
                        <JourneyMap journey={journey} />
                    </div>
                )}
        </>
    )
}

export default Journey