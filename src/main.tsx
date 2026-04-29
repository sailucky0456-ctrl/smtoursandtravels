import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import IndexPage from "./pages/Index";
import FleetPage from "./pages/Fleet";
import DestinationsPage from "./pages/Destinations";
import PackagesPage from "./pages/Packages";
import ContactPage from "./pages/Contact";
import NotFoundPage from "./pages/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
