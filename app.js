import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

const heading = createElement("h1", { id: "headind" }, "hello react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const jsxheading = <h1 id="jsxh1">Hello world using jsx</h1>;
