import React from "react";
import Helmet from "react-helmet";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Workflow</title>
      </Helmet>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
