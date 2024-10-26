import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Perfect from "../Perfect/Perfect";
import GoogleMapReact from 'google-map-react';

import propType from "prop-types";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
  const defaultProps = {
    center: {
      lat: 9.0079232,
      lng: 38.8169728
    },
    zoom: 11
  };

  // if (isloaded) return 
  return (
    <div className="fixed w-dvw h-dvh">
      {isloaded}
      {isloaded ? (
        <Perfect />
      ) : (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      )}
    </div>
  );
}

Map.propTypes = {
  isloaded: propType.bool.isRequired,
};

export default Map;
