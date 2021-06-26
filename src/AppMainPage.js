import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Home, Contact, About } from "./pages";

const AppMainPage = () => {
  const name = "Jim Gary";
  return (
    <main className="container-outer">
      <nav className="container-inner">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to={`/about/${name}`}>About</Link>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about/:name" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  );
};

export default AppMainPage;
