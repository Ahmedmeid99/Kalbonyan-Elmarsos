import ReactDOM from "react-dom/client";
import React from "react";
import "./style/react-router.css";

import { Route, BrowserRouter, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}
const MainHeader = () => {
  return (
    <header className={"header"}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
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
