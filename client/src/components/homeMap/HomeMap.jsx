import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./HomeMap.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const HomeMap = () => {

    let DefaultIcon = L.icon({
        iconUrl: icon,
        iconRetinaUrl: iconRetinaUrl,
        shadowUrl: iconShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
    })

    L.Marker.prototype.options.icon = DefaultIcon;
    return (
        <MapContainer center={[60.1699, 24.9384]} zoom={11} scrollWheelZoom={false} >
            <TileLayer
                url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png'
                attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                subdomains='abcd'
            />
            <Marker position={[60.1699, 24.9384]} >
                <Popup>

                </Popup>
            </Marker>

        </MapContainer>
    )
}

export default HomeMap