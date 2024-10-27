import  { useCallback, useState, useEffect } from 'react';
import { Circle, CircleF, GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import RecipeReviewCard from './RecipeReviewCard';
import axios from 'axios'; // Import Axios

const containerStyle = {
  width: "70vw",
  height: "100vh",
};

const center = {
    lat: 9.225492,
    lng: 38.6663487,
  };
  
function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCtIGX5DjROORcpJAo8fNh2TD7S67FcVvM", // Replace with your API key
  });
  const [markers, setMarkers] = useState([center]);
   // Store all markers
   const [apifeatch, setApifeatch] = useState([]);
   const [selectedPosition, setSelectedPosition] = useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, []);

  const onUnmount = useCallback(() => {}, []);

  const { data, isLoading } = useGetData();

  // console.log(data, isLoading);

  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setPosition(newMarker);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://outreach-mapping.onrender.com/form/getReachedPeoples');
        setApifeatch(response.data); // Update apifeatch with fetched data
        console.log(response.data); // Log fetched data for testing purposes
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function
  }, [isLoaded]);

  console.log(apifeatch)

  return isLoaded ? (
    <>
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
    {apifeatch.map((pinmarker, index) => (
        
    <MarkerF
      key={index}
      position={{
        lat: parseFloat(pinmarker.location.coordinates[0]),
        lng: parseFloat(pinmarker.location.coordinates[1])
      }}
      onClick={() => handleMarkerClick(pinmarker)}
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
    </>

  ) : (
    <></>
  );
}

export default MapComponent;
