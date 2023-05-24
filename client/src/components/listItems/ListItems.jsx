import React from 'react';
import { Link } from "react-router-dom";
import "./ListItems.css";
import { calculateDistance, calculateDuration } from '../../utils/journeyUtils';

const ListItems = ({ items, type }) => {
    if (type === 'stations') {
        return (
            <div className='listItems'>
                {items.map(station => (
                    <Link to={`/stations/${station.id}`} key={station.id} className='link listItem' value={station}>
                        <div >{station.nimi}</div>
                        <div >{station.osoite}</div>
                        <div >{station.kaupunki}</div>
                    </Link>
                ))}
            </div>
        );
    } else if (type === 'journeys') {
        return (
            <div className='listItems'>
                {items.map(journey => (
                    <Link to={`/journeys/${journey._id}`} key={journey._id} className='link listItem' value={journey}>
                        <div>{journey.departureStationName}</div>
                        <div>{journey.returnStationName}</div>
                        <div> {calculateDistance(journey.coveredDistanceM)} km</div>
                        <div> {calculateDuration(journey.durationSec).minutes} min {calculateDuration(journey.durationSec).seconds} s</div>
                    </Link>
                ))}
            </div>
        );
    } else {
        return null;
    }
};

export default ListItems;