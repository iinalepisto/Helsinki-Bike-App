import React from 'react';
import "./JourneyInfo.css";
import { calculateDistance, calculateDuration } from '../../utils/journeyUtils';

const JourneyInfo = ({ journey }) => {
    return (
        <div className='infoCard'>
            <h1>Matka</h1>
            <p>Matkan lähtöasema {journey.departureStationName}</p>
            <p>Matkan pääteasema {journey.returnStationName}</p>
            <p>Matkan pituus {calculateDistance(journey.coveredDistanceM)} km</p>
            <p>Matkan kesto {calculateDuration(journey.durationSec).minutes} min {calculateDuration(journey.durationSec).seconds} s</p>
        </div>
    )
}

export default JourneyInfo