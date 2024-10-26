import { useCallback, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { getCurrentLocation } from "../Perfect/apiGeocoding";
import { useGetData } from "../hooks/useGetData";

const containerStyle = {
  width: "70vw",
  height: "100vh",
};

const pos = getCurrentLocation();

const center =
  pos !== undefined
    ? { lat: pos.latitude, lng: pos.longitude }
    : {
        lat: -3.745,
        lng: -38.523,
      };

function MapComponent({ setPosition }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCtIGX5DjROORcpJAo8fNh2TD7S67FcVvM", // Replace with your API key
  });
  const [markers, setMarkers] = useState([center]); // Store all markers
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
  return isLoaded ? (
    <GoogleMap
      id="google-map"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={handleMapClick} // Capture clicks on the map
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        mapTypeId: "satellite",
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

export default MapComponent;
