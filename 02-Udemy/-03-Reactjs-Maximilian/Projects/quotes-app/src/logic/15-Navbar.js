import ReactDOM from "react-dom/client";
import React from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./style/portfolio.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route Path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route Path="/home">
          <Home />
        </Route>
        <Route Path="/about" exact>
          <About />
        </Route>
        <Route Path="/projects">
          <Projects />
        </Route>
        <Route Path="/contect-us">
          <ContectUs />
        </Route>
        <Route Path="/login">
          <Login />
        </Route>
        <Route Path="/*">
          <NotFourd />
        </Route>
      </Switch>
    </Layout>
  );
}
const Layout = (props) => {
  return (
    <>
      <Header />
      <div>{props.chidren}</div>
    </>
  );
};
/***************************************/
const Header = () => {
  return (
    <header className="header">
      <NavBar />
    </header>
  );
};
/***************************************/
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">Ahmed</div>
      <NavLinks />
    </div>
  );
};
/***************************************/
const NavLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="link" to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contect-us" activeClassName="active">
            Contect us
          </NavLink>
        </li>
      </ul>
      <button className="button">
        <Link to="/login">Login</Link>
      </button>
    </nav>
  );
};
const Home = () => {
  return <h1>Home Page</h1>;
};

const About = () => {
  return <h1>About Page</h1>;
};

const Projects = () => {
  return <h1>Projects Page</h1>;
};

const ContectUs = () => {
  return <h1>Contect us Page</h1>;
};

const Login = () => {
  return <h1>Login Page</h1>;
};

const NotFourd = () => {
  return <h1>NotFourd Page</h1>;
};
/***************************************/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
