import { GoogleMap, LoadScript, useJsApiLoader } from "@react-google-maps/api";
import Perfect from "../Perfect/Perfect";
import { useEffect, useState } from "react";

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
  const [loadings, setLoading] = useState(isloaded);
  useEffect(() => {
    console.log("isLoaded", loadings);

    if (loadings) {
      setLoading(true);
    }
  }, [loadings]);

  return (
    <div
      className="bg-red-500"
      style={{
        backgroundColor: "red",
        width: "100%",
      }}
    >
      {loadings ? (
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

export default Map;
