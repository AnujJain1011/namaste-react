import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => JS Object
// JS object -> ReactDOM.createRoot => HTMLElement(Render to browser)
const heading = React.createElement(
  "h1",
  { id: "heading", className: "abc" },
  "Namaste JavaScript 🚀"
);
//const rootjs = document.getElementById("root");

// JSX (gets transpiled into the react code) by Parcel using Babel
// JSX code => Babel transpiles it to React.createElement (JS Object) => ReactDOM.createRoot -> HTMLElement(render)

// React Element is what ---> is a javascript code at the end of the day
const jsxHeading = <h1 className="head">Namaste React using JSX 🚀</h1>;
// if i had to write multiple line code in jsx we need to enclose it inside parenthesis () for babel to understand it better

const Title = () => <h1 className="head">Namaste React using JSX 🚀</h1>;
// React Component Composition
const HeadingComponent = () => (
  <div id="container">
    {/* 3 ways to put a react component into another react component */}
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Components</h1>
  </div>
);

// using React
const newElement = React.createElement("div", { id: "container" }, [
  React.createElement(
    "h1",
    { className: "head", tabIndex: "5" },
    "Namaste React using JSX 🚀"
  ),
  React.createElement(
    "h1",
    { className: "heading" },
    "Namaste React Functional Component"
  ),
]);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<HeadingComponent />);
// root2.render(newElement);
