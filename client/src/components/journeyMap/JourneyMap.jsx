import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "./JourneyMap.css";
import { fetchStationCoordinates } from '../../utils/api';
import Spinner from '../spinner/Spinner';

const JourneyMap = ({ journey }) => {
    const [departureCoordinates, setDepartureCoordinates] = useState([]);
    const [returnCoordinates, setReturnCoordinates] = useState([]);
    const [isLoading, setIsloading] = useState(true);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsloading(true);
                const depRes = await fetchStationCoordinates(journey.departureStationId);
                const retRes = await fetchStationCoordinates(journey.returnStationId);

                setDepartureCoordinates([depRes.y, depRes.x]);
                setReturnCoordinates([retRes.y, depRes.x]);
                console.log(depRes);
                setIsloading(false);
            } catch (error) {
                console.error("Error while fetching station data:", error);
            }
        };
        fetchData();
    }, [journey.departureStationId, journey.returnStationId]);

    L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <MapContainer center={departureCoordinates} zoom={11} scrollWheelZoom={false} >
                    <TileLayer
                        url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png'
                        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        subdomains='abcd'
                    />
                    <Marker position={departureCoordinates} >
                        <Popup>
                            {`Lähtöasema ${journey.departureStationName}`}
                        </Popup>
                    </Marker>
                    <Marker position={returnCoordinates} >
                        <Popup>
                            {`Pääteasema ${journey.returnStationName}`}
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </>
    )
}

export default JourneyMap