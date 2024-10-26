import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import AppLayout from "./components/AppLayout";
import './App.css'; // Ensure to create this CSS file for styling
import ResponsiveAppBar from "./components/AppBar";

function App() {
  return (
    <BrowserRouter>
  <ResponsiveAppBar/>
      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
