import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Customization from "../pages/customization";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customization" element={<Customization />} />
    </Routes>
  );
};

export default Routers;
