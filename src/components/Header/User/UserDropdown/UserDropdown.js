import React from "react";
import styles from "./UserDropdown.module.scss";
import UserDropdownLink from "./UserDropdownLink/UserDropdownLink";

const UserDropdown = ({ toggleOpen }) => {
  return (
    <div className={`${styles.user_dropdown} ${toggleOpen ? styles.open : ""}`}>
      <UserDropdownLink text="View Profile" />
      <UserDropdownLink text="Notifications" />
      <UserDropdownLink text="Settings" />
      <UserDropdownLink text="Quotes" />
      <UserDropdownLink text="All Tasks" />
    </div>
  );
};

export default UserDropdown;
