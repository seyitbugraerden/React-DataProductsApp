import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CardProvider from "./components/context/context.jsx";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CardProvider>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </CardProvider>
);
