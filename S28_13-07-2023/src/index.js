import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import CustomProviderComp from "./components/ContextTask-2/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CustomProviderComp>
    <App />
  </CustomProviderComp>
);
