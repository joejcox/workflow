import React from "react";
import LogoImage from "../../../assets/images/wflogo.webp";
import LogoSlim from "../../../assets/images/wflogosmall.png";
import styles from "./Logo.module.scss";

const Logo = ({ slim }) => {
  return (
    <section className={styles.sidebar_logo}>
      <a href="/">
        {slim ? (
          <img
            className={styles.sidebar_logo__slim}
            src={LogoSlim}
            alt="Webfactory logo"
          />
        ) : (
          <img
            className={styles.sidebar_logo__wide}
            src={LogoImage}
            alt="Webfactory Logo"
          />
        )}
      </a>
    </section>
  );
};

export default Logo;
