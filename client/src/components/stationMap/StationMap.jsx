import React from 'react';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./StationMap.css";
import { Icon } from 'leaflet';

const StationMap = ({ station }) => {

    const customIcon = new Icon({
        iconUrl: require("../../icons/blueIcon.png"),
        iconSize: [30, 30]
    });
    return (
        <MapContainer center={[station.y, station.x]} zoom={13}>
            <TileLayer
                url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png'
                attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                subdomains='abcd'
            />
            <Marker position={[station.y, station.x]} icon={customIcon}>
            </Marker>
        </MapContainer>
    );
}

export default StationMap
