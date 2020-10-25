import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Sidebar from "components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.global.scss";
import styles from "./App.module.scss";
import Main from "components/Main/Main";

// pages
import Dashboard from "pages/Dashboard";
import AddAccount from "pages/AddAccount";
import ReportsPage from "pages/ReportsPage";
import AllTasks from "pages/AllTasks";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HelmetProvider>
      <div className={`${styles.wrapper} ${isOpen ? styles.nav_open : ""}`}>
        <Router>
          <Sidebar menuIsOpen={isOpen} toggle={toggleMobileMenu} />
          <Main menuIsOpen={isOpen} toggle={toggleMobileMenu}>
            <main className={`${styles.main_content} container`} role="main">
              <Switch>
                <Route exact path="/">
                  <>
                    <Helmet>
                      <title>Dashboard | Webfactory Workflow</title>
                    </Helmet>
                    <Dashboard title="Dashboard" />
                  </>
                </Route>
                <Route path="/add-account">
                  <Helmet>
                    <title>Add Account | Webfactory Workflow</title>
                  </Helmet>
                  <AddAccount title="Add Account" />
                </Route>
                <Route path="/reports">
                  <Helmet>
                    <title>Reports | Webfactory Workflow</title>
                  </Helmet>
                  <ReportsPage title="Reports" />
                </Route>
                <Route path="/user/all-tasks">
                  <Helmet>
                    <title>All Tasks | Webfactory Workflow</title>
                  </Helmet>
                  <AllTasks title="All Tasks" />
                </Route>
              </Switch>
            </main>
          </Main>
        </Router>
      </div>
    </HelmetProvider>
  );
};

export default App;
