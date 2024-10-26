import React, { useState, useCallback } from 'react';
import { GoogleMap, MarkerF, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCtIGX5DjROORcpJAo8fNh2TD7S67FcVvM',
  });

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([center,]); // Store all markers
  const [selectedMarker, setSelectedMarker] = useState(null); // For the InfoWindow

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
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
const [selectedpossetion, selectedMarkerPosetion] =useState()
  // Marker click handler for InfoWindow
  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };
  const handleMarkerClicks = (marker) => {
    selectedMarkerPosetion(marker)
    setInfoWindowVisible(true);
  };

  const handleInfoWindowCloseClick = () => {
    setInfoWindowVisible(false);
  };
console.log(selectedMarker)
  return isLoaded ? (
    <div>

    <GoogleMap
      id="google-map-script"
      className="map w-full"
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
          onClick={() => {handleMarkerClick(marker)}}
        />
        
      ))}

      {/* Display InfoWindow if a marker is selected */}
      {selectedMarker && (
        <InfoWindow
          position={selectedMarker}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div>
            <h2>New Marker</h2>
         
            <p>Lat: {selectedMarker.lat}</p>
            <p>Lng: {selectedMarker.lng}</p>
          </div>
        </InfoWindow>
      )}
    
    </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
