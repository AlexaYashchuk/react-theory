import "./App.css";

import { AppHeader } from "./components/AppHeader";
import { NavPanel } from "./components/NavPanel";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./Routes";
import { useContext } from "react";
import { ContextTheme } from "./context/ContextTheme";

function App() {
  const { dark, toggleTheme } = useContext(ContextTheme);
  return (
    <div className={`contexTheme ${dark ? "dark" : "light"}`}>
      <AppHeader />
      <NavPanel />
      <Footer />
      <AppRoutes />
    </div>
  );
}

export { App };
