import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "react app", // app name registered
    entry: "//localhost:3011",
    container: "#micro-app1",
    activeRule: "/micro-app1",
  },
  {
    name: "vue app",
    // entry: { scripts: ["//localhost:7100/main.js"] },
    entry: "//localhost:3012",
    container: "#micro-app2",
    activeRule: "/micro-app2",
  },
]);

start();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
