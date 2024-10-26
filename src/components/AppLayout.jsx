
import MapComponent from "./MapComponent";
import FormComponent from "./FormComponent";



function AppLayout() {
  
  return (
    <div className="flex-container">
      <FormComponent />
      <MapComponent />
      </div>
  );
}

export default AppLayout;
