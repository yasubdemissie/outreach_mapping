

import { useJsApiLoader } from "@react-google-maps/api";
import Map from "../pages/Map";
import { Form } from "react-hook-form";

function AppLayout() {
  const apiKey = "AIzaSyCtIGX5DjROORcpJAo8fNh2TD7S67FcVvM";

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });
  return (
    <div className="w-screen h-screen">
     
<div>
<Form/>
</div>
<div style={{
  width: "50vw",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
  borderRadius: "16px",
  backgroundColor: "#f2f2f2",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)"
 
}}>
      <Map isLoaded={isLoaded} />

</div>
    
    </div>
  );
}

export default AppLayout;
