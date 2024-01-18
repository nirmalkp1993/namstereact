/*
<div id="parent">
<div id="child">
<h1>This is h1 tag</h1>
<h1>This is h2 tag</h1>
</div>
<div id="child2">
<h1>This is h1 tag</h1>
<h1>This is h2 tag</h1>
</div>


</div>
*/
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ]),
]);

const heading = React.createElement("h1", {}, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
