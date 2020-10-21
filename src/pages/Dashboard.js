import React from "react";
import PageTitle from "components/PageTitle/PageTitle";
import Stats from "page-components/Dashboard/Stats/Stats";

const Dashboard = ({ title }) => {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <Stats />
    </>
  );
};

export default Dashboard;
