import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const queryClient = new queryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryCleinetProvider client={queryClient}>
      <App />
    </QueryCleinetProvider>
  </StrictMode>
);
