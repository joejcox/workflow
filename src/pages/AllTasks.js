import React from "react";
import PageTitle from "components/PageTitle/PageTitle";
import Tasks from "components/Tasks/Tasks";

const AllTasks = ({ title }) => {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <Tasks />
    </>
  );
};

export default AllTasks;
