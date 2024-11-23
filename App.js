import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  "div",
  {},
  [React.createElement("div", {key: 'div1'}, [
    React.createElement("h1", {key: "1"}, "Hello World "),
    React.createElement("h2", {key: "2"}, "Hello World "),
  ]),
  React.createElement("div", {key: 'div2'}, [
    React.createElement("h1", {key: "1"}, "Hello World "),
    React.createElement("h2", {key: "2"}, "Hello World "),
  ])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading); // will be an object
root.render(heading); // render convert it into HTML element and gives to div
