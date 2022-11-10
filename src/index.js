import React from "react";
import { createRoot } from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
    //<BrowserRouter>
    <HashRouter>
        <App />
    </HashRouter>,
    //</BrowserRouter>,
);

// if (module.hot) {
//     module.hot.accept();
// }
