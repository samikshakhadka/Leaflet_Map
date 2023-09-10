
import './App.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import L from 'leaflet';
import { useRef } from 'react';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Circle, CircleMarker, Polyline, Polygon, Rectangle, Popup, ScaleControl, Marker } from 'react-leaflet';
import SearchBar from './Component/searchBar';
import LocationMarker from './Component/locationMarker';
import Geocoding from './Component/geocoding';
import Shape from './Component/shape'

// const polyline = [
//   [51.505, -0.09],
//   [51.51, -0.1],
//   [51.51, -0.12],
// ]

// const multiPolyline = [
//   [
//     [51.5, -0.1],
//     [51.5, -0.12],
//     [51.52, -0.12],
//   ],
//   [
//     [51.5, -0.05],
//     [51.5, -0.06],
//     [51.52, -0.06],
//   ],
// ]

// const polygon = [
//   [51.515, -0.09],
//   [51.52, -0.1],
//   [51.52, -0.12],
// ]

// const multiPolygon = [
//   [
//     [51.51, -0.12],
//     [51.51, -0.13],
//     [51.53, -0.13],
//   ],
//   [
//     [51.51, -0.05],
//     [51.51, -0.07],
//     [51.53, -0.07],
//   ],
// ]

// const rectangle = [
//   [51.49, -0.08],
//   [51.5, -0.06],
// ]

// const fillBlueOptions = { fillColor: 'blue' }
// const blackOptions = { color: 'black' }
// const limeOptions = { color: 'lime' }
// const purpleOptions = { color: 'purple' }
// const redOptions = { color: 'red' }



const position = [51.505, -0.09];
function App() {

  const center = [51.505, -0.09];
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [markerPosition, setMarkerPosition] = useState([51.505, -0.09]);
  const mapRef = useRef(null);

  return (
    <div className="bg-white mx-auto max-w-4xl p-10 border border-gray-300">
      <div className="flex items-top justify-left w-full h-full aspect-square mt-6 ">
        {/* <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: '80%', width: '80%' }}>
          ref={mapRef}
          style={{ height: '100%', width: '100%', cursor: 'pointer' }}
          center={location}
          zoom={13}
          scrollWheelZoom={false}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <SearchBar />
          <LocationMarker />
          <ScaleControl position="bottomleft" />
          <Shape />



          <Geocoding />
        </MapContainer> */}

        <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: '80%', width: '80%' }} ref={mapRef}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <SearchBar />
          <LocationMarker />
          <ScaleControl position="bottomleft" />
          <Shape />
          <Geocoding />
        </MapContainer>

      </div>
    </div>
  );
}
export default App;













