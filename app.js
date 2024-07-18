import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

const ele = <span>React element</span>;
const heading = <h2> {ele} hello react by Ajinkya</h2>;
const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root.render(heading);

// const click = () => {
//   root2.render(heading);
// };

// const jsxheading =
//   ((
//     <h1 id="jsxh1" className="head" tabIndex="2">
//       Hello world using JSX
//     </h1>
//   ),
//   (
//     <button id="btn1" onClick={click}>
//       "click me"
//     </button>
//   ));

const HeadingComp = () => <h1>Functional component from 1st head</h1>;
const number = 1000;

const HeadingComp2 = () => {
  return (
    <div id='container'>
      <HeadingComp />
      {heading}
      <h2>{number + 100}</h2>
      <h1 id='Heading'>Functional component in React</h1>
      <h2>you piece of shit</h2>
    </div>
  );
};
// root.render(<HeadingComp />);
// root2.render(element);
root2.render(<HeadingComp2 />);
