import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Customization from "../pages/customization";
import Layout from "../pages/Layout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customization" element={<Customization />} />
      <Route path="/layout" element={<Layout />} />
    </Routes>
  );
};

export default Routers;
