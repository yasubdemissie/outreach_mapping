import  { useCallback, useState } from 'react';
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import RecipeReviewCard from './RecipeReviewCard';

const containerStyle = {
  width: '70vw',
  height: '100vh',
};

const center = {
    lat: -3.745,
    lng: -38.523,
  };
  const apifeatch=[
    {
      "location": {
        "type": "Point",
        "coordinates": [
           -3.745,
            -38.523
        ]
      },
      "_id": "671c9bd152ade19a5a50ed70",
      "name": "someone",
      "evangelismMethod": "oneToOneOutreach",
      "numOfPeopleReached": 20,
      "numOfPeopleSaved": 10,
      "numOfPeopleRepent": 2,
      "area": 20,
      "date": "Sep 20, 2024",
      "description": "This is the description",
      "image": 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      "createdAt": "2024-10-26T07:35:45.071Z",
      "updatedAt": "2024-10-26T07:35:45.071Z",
      "__v": 0
    },
    {
        "location": {
          "type": "Point",
          "coordinates": [
            9.0058687,
            38.8072656
          ]
        },
        "_id": "671c9bd152ade19a5a50ed70",
        "name": "someone",
        "evangelismMethod": "oneToOneOutreach",
        "numOfPeopleReached": 20,
        "numOfPeopleSaved": 10,
        "numOfPeopleRepent": 2,
        "area": 20,
        "date": "Sep 20, 2024",
        "description": "This is the description",
        "image": null,
        "createdAt": "2024-10-26T07:35:45.071Z",
        "updatedAt": "2024-10-26T07:35:45.071Z",
        "__v": 0
      }
  ]
function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCtIGX5DjROORcpJAo8fNh2TD7S67FcVvM', // Replace with your API key
  });
  const [markers, setMarkers] = useState([center,]);
   // Store all markers
  const [selectedPosition, setSelectedPosition] = useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, []);

  const onUnmount = useCallback(() => {
  }, []);

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
  console.log(selectedPosition)
  return isLoaded ? (
    <GoogleMap
      id="google-map"
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
    {/* Render center marker */}
    {apifeatch.map((marker, index) => (
    <MarkerF
      key={index}
      position={{ lat: marker.location.coordinates[0], lng: marker.location.coordinates[1] }}
      onClick={() => handleMarkerClick(marker)}
    />
   ) )}

    {infoWindowVisible && selectedPosition && (
      
      <InfoWindowF
        position={{ lat: selectedPosition.location.coordinates[0], lng: selectedPosition.location.coordinates[1] }}
        onCloseClick={handleInfoWindowClose}
      >
        <div>

    <RecipeReviewCard data={selectedPosition}/>
    </div>
      </InfoWindowF>
    )}
  </GoogleMap>
  ) : (
    <></>
  );
}

export default MapComponent;
