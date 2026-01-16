import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout"; 

import Home from "@/Pages/Home";
import About from "@/Pages/About";
import Services from "@/Pages/Services";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
