import ReactDOM from "react-dom/client";
import React from "react";
import "./style/react-router.css";

import {
  Route, //select the path and eny component will render
  BrowserRouter, //contain the App component
  NavLink, // add class active to the link + add path to the link
  Link, //add path to the link
  useParams, // pass data to any component
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
  return (
    <div>
      <h1>The Welcome Page</h1>
      <Link to="/welcome/new-user">New User</Link>
      <Route path="/welcome/new-user">
        <p>welcom new user</p>
      </Route>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
