

import { useJsApiLoader } from "@react-google-maps/api";
import Map from "../pages/Map";
import Form from "../pages/Form";


function AppLayout() {
  const apiKey = "AIzaSyCtIGX5DjROORcpJAo8fNh2TD7S67FcVvM";

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });
  return (
    <>
      <Form />
      <Map isLoaded={isLoaded} />
    </>
  );
}

export default AppLayout;
