import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import store from "./redux/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
