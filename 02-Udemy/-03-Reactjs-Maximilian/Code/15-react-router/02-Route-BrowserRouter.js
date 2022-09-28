import ReactDOM from "react-dom/client";
import React from "react";
import "./style/react-router.css";

import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}
const Products = () => {
  return <h1>The Products Page</h1>;
};

const Welcome = () => {
  return <h1>The Welcome Page</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
