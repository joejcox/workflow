import React from "react";
import Logo from "./Logo/Logo";
import { SidebarNavTop, SidebarNavBottom } from "./SidebarNav/SidebarNav";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_container}>
        <div className={styles.sidebar_top}>
          <Logo />
          <SidebarNavTop />
        </div>
        <div className={styles.sidebar_bottom}>
          <SidebarNavBottom />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
