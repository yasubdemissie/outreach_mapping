

import { useJsApiLoader } from "@react-google-maps/api";
import Map from "../pages/Map";
import Form from "./Form";


function AppLayout() {
  const apiKey = "AIzaSyCtIGX5DjROORcpJAo8fNh2TD7S67FcVvM";

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });
  return (
    <>
      <Form />
      <div className="w-full h-full">

      <Map isLoaded={isLoaded} />
      </div>
    </>
  );
}

export default AppLayout;
