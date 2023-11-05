import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./pages/page/Page.tsx";
import "./index.css";
import { Route, Router, Routes } from "react-router-dom";
import { Scene } from "./pages/3D/Scene.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router location={document.location} navigator={navigator}>
      <Routes>
        <Route index element={<Page />} />
        <Route path="3d" element={<Scene />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
