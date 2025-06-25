import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Splashscreen } from "@acme/ui";

const root = document.getElementById("root") as HTMLElement;
// Trigger redeploy

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Splashscreen />
    </BrowserRouter>
  </React.StrictMode>
);
