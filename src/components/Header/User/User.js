import React, { useState } from "react";
import UserAvatar from "./UserAvatar/UserAvatar";
import UserDropdown from "./UserDropdown/UserDropdown";
import styles from "./User.module.scss";

const User = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.user_button} onClick={() => openMenu()}>
      <UserAvatar toggleOpen={open} />
      <UserDropdown toggleOpen={open} />
    </div>
  );
};

export default User;
