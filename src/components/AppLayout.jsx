
import MapComponent from "./MapComponent";
import FormComponent from "./FormComponent";



function AppLayout() {
  
  return (
    <div className="flex-container">
      <div className="w-[600px]">

      <FormComponent />
      </div>
      <MapComponent />
      </div>
  );
}

export default AppLayout;
