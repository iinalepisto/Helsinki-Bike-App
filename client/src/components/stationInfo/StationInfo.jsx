import React from 'react';
import "./StationInfo.css";

const StationInfo = ({ station }) => {
    return (
        <div className='infoCard'>
            <h1>{station.nimi}</h1>
            <p>Aseman osoite: {station.osoite}, {station.kaupunki}</p>
            <p>Asemalta lähteneiden matkojen kokonaismäärä: {station.startingJourneysCount} kpl</p>
            <p>Asemalle päättyneiden matkojen kokonaismäärä: {station.endingJourneysCount} kpl</p>
        </div>
    )
}

export default StationInfo