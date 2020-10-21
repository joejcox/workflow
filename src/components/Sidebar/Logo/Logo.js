import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "assets/images/wflogo.webp";
import LogoSlim from "assets/images/wfsmall.webp";
import styles from "./Logo.module.scss";

const Logo = ({ slim, menuIsOpen, click }) => {
  return (
    <section
      className={`${styles.sidebar_logo} ${menuIsOpen ? styles.open : ""}`}
    >
      <Link to="/" onClick={click}>
        {slim ? (
          <>
            <img
              className={styles.sidebar_logo__slim}
              src={LogoSlim}
              alt="Webfactory logo"
            />
            <img
              className={`${styles.sidebar_logo__wide} ${styles.hidden}`}
              src={LogoImage}
              alt="Webfactory Logo"
            />
          </>
        ) : (
          <img
            className={styles.sidebar_logo__wide}
            src={LogoImage}
            alt="Webfactory Logo"
          />
        )}
      </Link>
    </section>
  );
};

export default Logo;
