import React from "react";
import Sidebar from "components/Sidebar";
import Bottombar from "components/Bottombar";
import Content from "components/Content";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Bottombar />
    </>
  );
}

export default App;