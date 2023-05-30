import React from 'react';
import "./StationInfo.css";
import { calculateDistance, calculateDuration } from '../../utils/journeyUtils';

const StationInfo = ({ station }) => {
    console.log(station);
    return (
        <div className='infoCard'>
            <h1>{station.nimi}</h1>
            <p>Aseman osoite: {station.osoite}, {station.kaupunki}</p>
            <p>Asemalta lähteneiden matkojen kokonaismäärä: {station.startingJourneysCount} kpl</p>
            <p>Asemalta lähteneiden matkojen keskimääräinen pituus: {calculateDistance(station.startingAverageDistance)} km</p>
            <p>Asemalta lähteneiden matkojen keskimääräinen kesto: {calculateDuration(station.startingAverageDistance).minutes} min {Math.round(calculateDuration(station.startingAverageDistance).seconds)} s</p>
            <p>Asemalle päättyneiden matkojen kokonaismäärä: {station.endingJourneysCount} kp</p>
            <p>Asemalla päättyneiden matkojen keskimääräinen pituus: {calculateDistance(station.endingAverageDistance)} km</p>
            <p>Asemalla päättyneiden matkojen keskimääräinen kesto: {calculateDuration(station.endingAverageDistance).minutes} min {Math.round(calculateDuration(station.endingAverageDistance).seconds)} s</p>
        </div>
    )
}

export default StationInfo