import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "flexboxgrid/dist/flexboxgrid.css";
import '@ibm/plex/css/ibm-plex.css';
import App from "./App";
import { BlueprintProvider } from "@blueprintjs/core";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BlueprintProvider>
      <App />
    </BlueprintProvider>
  </React.StrictMode>,
);
