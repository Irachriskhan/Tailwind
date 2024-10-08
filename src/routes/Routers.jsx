import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Customization from "../pages/customization";
import Layout from "../pages/Layout";
import Spacing from "../pages/Spacing";
import Sizing from "../pages/Sizing";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customization" element={<Customization />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/spacing" element={<Spacing />} />
      <Route path="/sizing" element={<Sizing />} />
    </Routes>
  );
};

export default Routers;
