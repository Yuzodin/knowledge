import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";

import HomePage from "./HomePage/homePage";
import PaginaAula from "./HomePage/PaginaAula";
import NotFound from "./HomePage/NotFound";
import { ThemeProvider } from "./HomePage/darkTheme"; // <-- importe o provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/paginaaula" element={<PaginaAula />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
