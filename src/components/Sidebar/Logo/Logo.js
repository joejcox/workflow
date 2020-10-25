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
      {slim ? (
        <>
          <Link to="/" onClick={click} className={styles.sidebar_logo__slim}>
            <img src={LogoSlim} alt="Webfactory logo" />
          </Link>
          <Link
            to="/"
            onClick={click}
            className={`${styles.sidebar_logo__wide} ${styles.hidden}`}
          ></Link>
        </>
      ) : (
        <Link to="/" onClick={click} className={styles.sidebar_logo__wide}>
          <img src={LogoImage} alt="Webfactory Logo" />
        </Link>
      )}
    </section>
  );
};

export default Logo;
