import React from "react";
import LogoImage from "../../../assets/images/wflogo.webp";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <section className={styles.sidebar_logo}>
      <a href="/">
        <img src={LogoImage} alt="Webfactory Logo" />
      </a>
    </section>
  );
};

export default Logo;
