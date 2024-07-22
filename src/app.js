import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import resList1 from "./utils/config.jsx";
import Body from "./components/Body.jsx";

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
