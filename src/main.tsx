import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Anxiety from "./pages/Anxiety.tsx";
import Burnout from "./pages/Burnout.tsx";
import Depression from "./pages/Depression.tsx";
import Emergency from "./pages/Emergency.tsx";
import Home from "./pages/Home.tsx";
import Images from "./pages/Images.tsx";
import NotFound from "./pages/NotFound.tsx";
import Stress from "./pages/Stress.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} /> {/* Startar med Home */}
          <Route path="depression" element={<Depression />} />
          <Route path="anxiety" element={<Anxiety />} />
          <Route path="stress" element={<Stress />} />
          <Route path="burnout" element={<Burnout />} />
          <Route path="images" element={<Images />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="*" element={<NotFound />} /> {/* 404-sida */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
