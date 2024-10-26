import React, { useState, useCallback } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader, InfoWindowF } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCtIGX5DjROORcpJAo8fNh2TD7S67FcVvM',
  });

  const [markers, setMarkers] = useState([center,]); // Store all markers
  const [selectedPosition, setSelectedPosition] = useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, []);

  const onUnmount = useCallback(() => {
  }, []);

  // Capture map clicks and add a new marker
  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkers((current) => [...current, newMarker]); // Add new marker to markers array
  };

  const [infoWindowVisible, setInfoWindowVisible] = useState(false);

  const handleMarkerClick = (marker) => {
    setSelectedPosition(marker);
    setInfoWindowVisible(true);
  };

  const handleInfoWindowClose = () => {
    setInfoWindowVisible(false);
    setSelectedPosition(null);
  };

  return isLoaded ? (
 
      <GoogleMap
        id="google-map-script"
        className="map"
        mapElement={null}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={handleMapClick} // Capture clicks on the map
        options={{
          streetViewControl: false,
          mapTypeControl: false,
           mapTypeId: 'satellite'

        }}
      >
        {/* Render each marker */}
        {markers.map((marker, index) => (
          <MarkerF
            key={index}
            position={marker}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}

        {infoWindowVisible && selectedPosition && (
          <InfoWindowF
            position={selectedPosition}
            onCloseClick={handleInfoWindowClose}
          >
            <div>
              <h2>New Marker</h2>
              <p>Lat: {selectedPosition.lat}</p>
              <p>Lng: {selectedPosition.lng}</p>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
