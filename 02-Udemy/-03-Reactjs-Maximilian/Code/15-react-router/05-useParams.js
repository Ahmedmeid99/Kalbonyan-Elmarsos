import ReactDOM from "react-dom/client";
import React from "react";
import "./style/react-router.css";

import { Route, BrowserRouter, NavLink, useParams } from "react-router-dom";

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
        <Route path="/product-detail/:productId/:name/:details">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}
//use this link http://localhost:3000/product-detail/id1/ahmedeid/my%20name%20is%20ahmed%20eid
const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <p>{params.name}</p>
      <p>{params.details}</p>
    </section>
  );
};
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
