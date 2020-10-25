import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import Hamburger from "components/Header/Hamburger/Hamburger";
import User from "./User/User";
import styles from "./Header.module.scss";
import Logo from "assets/images/wfsmall.webp";

const Header = ({ menuIsOpen, toggle }) => {
  return (
    <header className={styles.site_header}>
      <div className={`container ${styles.site_header__container}`}>
        <Hamburger menuIsOpen={menuIsOpen} toggle={toggle} />
        <Link to="/">
          <img
            className={styles.site_header__logo}
            src={Logo}
            alt="Webfactory Logo"
          />
        </Link>
        <Search />
        <User />
      </div>
    </header>
  );
};

export default Header;
