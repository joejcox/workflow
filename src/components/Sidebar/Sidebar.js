import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { menuIsOpen, toggleMenuSlim, menuIsSlim } from "redux/menu/menuSlice";
import Logo from "./Logo/Logo";
import { FaArrowLeft } from "react-icons/fa";
import { SidebarNavTop, SidebarNavBottom } from "./SidebarNav/SidebarNav";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(menuIsOpen);
  const isSlim = useSelector(menuIsSlim);

  return (
    <aside
      className={`${styles.sidebar} ${isSlim ? styles.slim : ""} ${
        isOpen ? styles.open : ""
      }`}
    >
      <div className={styles.sidebar_container}>
        <div className={styles.sidebar_top}>
          <span
            className={styles.toggle_menu}
            title={isSlim ? "Open" : "Close"}
            onClick={() => dispatch(toggleMenuSlim())}
          >
            <FaArrowLeft />
          </span>
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
