import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Post from "./pages/Post/post";
import Edit from "./pages/Edit/edit";
import Create from "./pages/Feed/create";
import Delete from "./pages/Lermais/delete"

function App() {
  return (
    <Router forceRefresh={true}>
      <Routes>
        <Route exact path="/" element={<Create/>} />
        <Route exact path="/post" element={<Post/>} />
        <Route exact path="/edit/:id" element={<Edit/>} />
        <Route exact path="/delete/:id" element={<Delete/>} />
      </Routes>
    </Router>
  );
}

export default App;
