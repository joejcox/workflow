import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "redux/tasks/tasksSlice";
import styles from "./UserDropdown.module.scss";
import UserDropdownLink from "./UserDropdownLink/UserDropdownLink";

const UserDropdown = ({ toggleOpen }) => {
  const tasks = useSelector(selectTasks);
  return (
    <div className={`${styles.user_dropdown} ${toggleOpen ? styles.open : ""}`}>
      <UserDropdownLink text="View Profile" />
      <UserDropdownLink text="Notifications" />
      <UserDropdownLink text="Settings" />
      <UserDropdownLink text="Quotes" />
      <UserDropdownLink text="All Tasks" count={tasks.length} />
    </div>
  );
};

export default UserDropdown;
