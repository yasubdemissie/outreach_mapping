import MapComponent from "./MapComponent";
// import FormComponent from "./FormComponent";
import Form from "./Form";
import { useState } from "react";
import ResponsiveAppBar from "./AppBar";

function AppLayout() {
  const [selectedPosition, setSelectedPosition] = useState(null);

  return (
    <Container maxWidth="xl">
      <div>
 <ResponsiveAppBar/>

      </div>
    <Container maxWidth="xl" className="flex-container pt-96">
      <Form position={selectedPosition} />
      <MapComponent setPosition={setSelectedPosition} />
    </Container>
    </Container>
  );
}

export default AppLayout;