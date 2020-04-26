// React
import React from "react";

// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Apollo & GraphQL
import { ApolloProvider } from "react-apollo";
import { client } from "./gql/client";

// Pages
import IndexApp from "./pages/IndexApp";
import AdminPanel from "./pages/Admin";

/**
 * Routes of the application.
 *
 * "/" for Index
 * "/admin" for Admin Panel
 */
export default function Routes() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
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
}
