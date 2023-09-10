import React, { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { MapContainer, TileLayer, Circle, CircleMarker, Polyline, Polygon, Rectangle, ScaleControl } from 'react-leaflet';


const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]
  
  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ]
  
  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ]
  
  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ]
  
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]
  
  const fillBlueOptions = { fillColor: 'blue' }
  const blackOptions = { color: 'black' }
  const limeOptions = { color: 'lime' }
  const purpleOptions = { color: 'purple' }
  const redOptions = { color: 'red' }
  
  const position = [51.505, -0.09];

function Shape(){

    const center = [51.505, -0.09];
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [markerPosition, setMarkerPosition] = useState([51.505, -0.09]);


    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (geoPosition) => {
          setLocation([
            geoPosition.coords.latitude,
            geoPosition.coords.longitude,
          ]);
          setMarkerPosition([
            geoPosition.coords.latitude,
            geoPosition.coords.longitude,
          ]);
          setLoading(false);
        },
        (geoError) => {
          setError(geoError.message);
          setLocation(position);
          setLoading(false);
        }
      );
    }, []);

    return(
    
    <div>
         <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
          <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
            <Popup>Popup in CircleMarker</Popup>
          </CircleMarker>
          <Polyline pathOptions={limeOptions} positions={polyline} />
          <Polyline pathOptions={limeOptions} positions={multiPolyline} />
          <Polygon pathOptions={purpleOptions} positions={polygon} />
          <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
          <Rectangle bounds={rectangle} pathOptions={blackOptions} />
    </div>
    );
    
    
}
export default Shape;