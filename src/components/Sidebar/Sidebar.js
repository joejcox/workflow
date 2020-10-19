import React, { useState } from "react";
import Logo from "./Logo/Logo";
import { FaArrowLeft } from "react-icons/fa";
import { SidebarNavTop, SidebarNavBottom } from "./SidebarNav/SidebarNav";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const [slim, setSlim] = useState(false);

  const toggleSidebar = () => {
    setSlim(!slim);
  };

  return (
    <aside className={`${styles.sidebar} ${slim ? styles.slim : ""}`}>
      <div className={styles.sidebar_container}>
        <div className={styles.sidebar_top}>
          <div className={styles.toggle_menu} onClick={() => toggleSidebar()}>
            <FaArrowLeft />
          </div>
          <Logo slim={slim} />
          <SidebarNavTop slim={slim} />
        </div>
        <div className={styles.sidebar_bottom}>
          <SidebarNavBottom slim={slim} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
