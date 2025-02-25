import { useState } from "react";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { NavPanel } from "./components/NavPanel";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <AppHeader />
      <NavPanel />
      <Footer />
      <AppRoutes />
    </>
  );
}

export { App };
