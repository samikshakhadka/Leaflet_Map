import React, { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
export { LocationMarker };
//import customMarkerIcon from './Images/icon';
//import L from 'leaflet';


// const customIcon = L.icon({
//     iconUrl: customMarkerIcon,
//     iconSize: [32, 32],
//     iconAnchor: [16, 32],
// });

function LocationMarker() {
    const center = [51.505, -0.09];
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={center} >
            <Popup>You are here</Popup>
        </Marker>
    );
}

export default LocationMarker;
