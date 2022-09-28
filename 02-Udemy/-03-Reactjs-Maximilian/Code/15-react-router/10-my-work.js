import { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import "./style/quotes-app.css";

import {
  Route, //select the path and eny component will render
  BrowserRouter, //contain the App component
  NavLink, // add class active to the link + add path to the link
  Link, //add path to the link
  useParams, // pass data to any component
  Switch, // naver render two component in the same time onley the first path
  Redirect, // add new path
  useHistory, //method to go to eny page using  path
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/add-project">
            <AddProject />
          </Route>
          <Route path="/show/:name/:info">
            <ShowProject />
          </Route>
          <Route path="*" exact>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};
const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={"main"}>{props.children}</main>
    </>
  );
};
const MainNavigation = () => {
  return (
    <header className={"header"}>
      <div className={"logo"}>Great Quotes</div>
      <nav className={"nav"}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={"active"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={"active"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName={"active"}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-project" activeClassName={"active"}>
              Add Project
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
const Home = () => {
  return <h1>Wlocom Home!</h1>;
};
const About = () => {
  return (
    <>
      <h3>Ahmoed Eid</h3>
      <p>Front End Developer</p>
    </>
  );
};
const projects = [
  { id: "p1", name: "one", info: "one one one one one one one one one" },
  { id: "p2", name: "two", info: "two two two two two two two two two" },
  { id: "p3", name: "three", info: "three three three three three three" },
  { id: "p4", name: "four", info: "four four four four four four four four" },
];
const Projects = () => {
  return (
    <>
      {projects.map((project) => (
        <Card key={project.id}>
          <Link to={`/show/${project.name}/${project.info}`}>
            {project.name}
          </Link>
        </Card>
      ))}
    </>
  );
};
const ShowProject = () => {
  const params = useParams();
  return (
    <>
      <p>{params.name}</p>
      <p>{params.info}</p>
    </>
  );
};
const AddProject = () => {
  const inputValue = useRef();
  const textAreaValue = useRef();
  const history = useHistory();
  const addProjectHandler = () => {
    const name = inputValue.current.value;
    const info = textAreaValue.current.value;
    const newProject = { id: Math.floor(Math.random() * 10000), name, info };
    projects.push(newProject);
    history.push("/projects");
  };
  return (
    <>
      <form onSubmit={addProjectHandler}>
        <label>
          <h3>Project Name</h3>
          <input type="text" ref={inputValue} />
        </label>
        <label>
          <h3>Details</h3>
          <textarea ref={textAreaValue} />
        </label>
        <button className="button">Add</button>
      </form>
    </>
  );
};
const NotFound = () => {
  return <h3>Not Found!</h3>;
};
const Card = (props) => {
  return <div className={"card"}>{props.children}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
