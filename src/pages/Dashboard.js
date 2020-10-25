import React from "react";
import PageTitle from "components/PageTitle/PageTitle";
import Tasks from "components/Tasks/Tasks";
import Stats from "page-components/Dashboard/Stats/Stats";

const Dashboard = ({ title }) => {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <Stats />
      <section className="panels">
        <Tasks />
      </section>
    </>
  );
};

export default Dashboard;
