import React from "react";
import {
  BrowserRouter as Router, Link
} from "react-router-dom";
import Sidebar from "components/Sidebar";
import Bottombar from "components/Bottombar";
import Content from "components/Content";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Bottombar />
    </Router>
  );
}

export default App;
