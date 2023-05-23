import React from 'react';
import { Link } from "react-router-dom";
import "./ListItems.css";

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
                    <Link to={`/journeys/${journey.id}`} key={journey.id} className='link listItem' value={journey}>
                        <div>{journey.departureStationName}</div>
                        <div>{journey.returnStationName}</div>
                        <div>{Math.round(journey.coveredDistanceM / 1000 * 1000) / 1000} km</div>
                        <div>{Math.floor(journey.durationSec / 60)} min {journey.durationSec % 60} s</div>
                    </Link>
                ))}
            </div>
        );
    } else {
        return null;
    }
};

export default ListItems;