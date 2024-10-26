import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Perfect from "../Perfect/Perfect";
import { useEffect, useState } from "react";
import propType from "prop-types";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const apiKey = "AIzaSyCtIGX5DjROORcpJAo8fNh2TD7S67FcVvM";

function Map({ isloaded }) {

  // if (isloaded) return 
  return (
    <div className="fixed w-dvw h-dvh">
      {isloaded ? (
        <Perfect />
      ) : (
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Child components, such as markers, info windows, etc. */}
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
}

Map.propTypes = {
  isloaded: propType.bool.isRequired,
};

export default Map;
