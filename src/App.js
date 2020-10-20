import React, { useState } from "react";
import Helmet from "react-helmet";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.global.scss";
import styles from "./App.module.scss";
import Main from "./components/Main/Main";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.nav_open : ""}`}>
      <Helmet>
        <title>Workflow</title>
      </Helmet>
      <Sidebar menuIsOpen={isOpen} toggle={toggleMobileMenu} />
      <Main menuIsOpen={isOpen} toggle={toggleMobileMenu} />
    </div>
  );
};

export default App;
