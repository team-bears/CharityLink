import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import IndexApp from "./IndexApp";
import AdminPanel from "./Admin";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <IndexApp />
          </Route>
          <Route path="/admin">
            <AdminPanel />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */
}

/* EXAMPLE MENU LINKS
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

*/
