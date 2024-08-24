const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World! from React"
);
//const rootjs = document.getElementById("root");

const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);
// root.render(parent); // render replaces the whole html code completely
// root.render(heading);

console.log(heading); // this is an object
