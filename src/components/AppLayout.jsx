import MapComponent from "./MapComponent";
// import FormComponent from "./FormComponent";
import Form from "./Form";
import { useState } from "react";

function AppLayout() {

  const [selectedPosition, setSelectedPosition ] = useState(null);

  return (
    <div className="flex-container max-h-dvh">
      <Form position={selectedPosition} />
      <MapComponent setPosition={setSelectedPosition} />
    </div>
  );
}

export default AppLayout;
