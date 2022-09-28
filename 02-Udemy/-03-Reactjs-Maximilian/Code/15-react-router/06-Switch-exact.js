import ReactDOM from "react-dom/client";
import React from "react";
import "./style/react-router.css";

import {
  Route,
  BrowserRouter,
  NavLink,
  useParams,
  Switch, // naver render two component in the same time onley the first path
} from "react-router-dom";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/product-detail">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <p>black 45</p>
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
