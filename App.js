const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc", className: "my-heading" },
//   "Hello World, Hii this is my first React App",
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "I am h1 tag"),
    React.createElement("h2", { id: "heading" }, "I am h2 tag"),
  ]),
        React.createElement("div", { id: "child2" }, [  
        React.createElement("h1", { id: "heading" }, "I am h1 tag"),
        React.createElement("h2", { id: "heading" }, "I am h2 tag"),
    ]),
]);


root.render(parent);
