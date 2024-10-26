import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const PageContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
`;

const MapContainerStyled = styled.div`
  grid-column: span 3;
  width: 100%;
  height: 100%;
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
    <PageContainer>
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
            <Marker key={index} position={[marker.lat, marker.lng]} >
              <Popup>duthcj</Popup>
            </Marker>
          ))}
          <MapClickHandler />
        </MapContainer>
      </MapContainerStyled>
    </PageContainer>
  );
}

export default Map;
