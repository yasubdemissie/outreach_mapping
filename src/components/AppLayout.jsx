import MapComponent from "./MapComponent";
// import FormComponent from "./FormComponent";
import Form from "./Form";
import { useState } from "react";

function AppLayout() {

  const [selectedPosition, setSelectedPosition ] = useState(null);

  return (
    <div className="flex-container mt-[80px]">
      <div className="w-[600px]">

      <FormComponent />
      </div>
      <MapComponent />
      </div>
  );
}

export default AppLayout;
