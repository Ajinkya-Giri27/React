import React from "react";
import ReactDOM from "react-dom";

const heading1 = React.createElement(
  "h1",
  { id: "aj", xyz: "abc" },
  "Hello world using react"
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(heading1);

// const btn1 = React.createElement("button", {}, "submit");
// root1.render(btn1);

// console.log(heading1);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "yo i'm child"),
    React.createElement("h2", {}, "i'm sibling of child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "yo i'm child"),
    React.createElement("h2", {}, "i'm sibling of child"),
  ]),
]);

console.log(parent);
root1.render(parent);

// React.createElement("div", { id: "child" }, [
//   React.createElement("h1", {}, "yo i'm child"),
//   React.createElement("h2", {}, "i'm sibling of child"),
// ]),
