import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Web-Layout/Header/Header";
import Posts from "./posts";
import PostDetail from "./postDetail";
import { Home } from "./home";
import AddPost from "./addpost";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/addPost" element={<AddPost />} />
        </Routes>
      </Router>{" "}
    </div>
  );
}

export default App;
