import React from "react";
import { Home, Contact, About } from "./pages";

const App = () => {
  return (
    <main className="container-outer">
      <nav className="container-inner">
        <ul>
          <li>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default App;
