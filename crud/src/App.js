import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Post from "./pages/Post/post";
import Edit from "./pages/Edit/edit";
import Feed from "./pages/Feed/feed";
import Lermais from "./pages/Lermais/lermais"

function App() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/lermais" component={Lermais} />
      </Switch>
    </Router>
  );
}

export default App;
