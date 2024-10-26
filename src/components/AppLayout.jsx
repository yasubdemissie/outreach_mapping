// import styled from "styled-components";
import Map from "../pages/Map";
import Form from "./Form";
// import { useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

function AppLayout() {
  // const apiKey = "AIzaSyCtIGX5DjROORcpJAo8fNh2TD7S67FcVvM";

  const [isVisible, setIsVisible] = useState(true);

  function onOpen() {
    setIsVisible(true);
  }

  return (
    <div className="w-dvw grid grid-rows-1 grid-cols-5">
      <Form isVisible={isVisible} onToggle={setIsVisible} />
      {<Map />}
    </div>
  );
}

export default AppLayout;
