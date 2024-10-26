import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const MapContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
`;

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map({ onOpen }) {
  const [markers, setMarkers] = useState([]);

  const MapClickHandler = () => {
    useMapEvents({
      click(event) {
        const { lat, lng } = event.latlng;
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        setMarkers([...markers, { lat, lng }]);
        onOpen();
      },
    });
    return null;
  };

  return (
    <MapContainerStyled>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]} />
        ))}
        <MapClickHandler />
      </MapContainer>
    </MapContainerStyled>
  );
}

export default Map;
