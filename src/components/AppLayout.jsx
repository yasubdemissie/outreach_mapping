import styled from "styled-components";
import Map from "../pages/Map";
import Form from "./Form";
import { useJsApiLoader } from "@react-google-maps/api";

const StyledContainer = styled.div`
  display: flex;
`;

function AppLayout() {
  const apiKey = "AIzaSyCtIGX5DjROORcpJAo8fNh2TD7S67FcVvM";

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });
  return (
    <div>
      <Form />
      <Map isLoaded={isLoaded} />
    </div>
  );
}

export default AppLayout;
