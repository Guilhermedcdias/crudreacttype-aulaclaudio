import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Post from "./pages/post";
import Edit from "./pages/edit";
import Feed from "./pages/feed";
import Lermais from "./pages/lermais"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/post" component={Post} />
        <Route path="/edit" component={Edit} />
        <Route path="/lermais" component={Lermais} />
      </Switch>
    </Router>
  );
}

export default App;
