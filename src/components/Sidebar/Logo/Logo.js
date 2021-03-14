import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { menuIsOpen, menuIsSlim, toggleMenu } from "redux/menu/menuSlice";
import { Link } from "react-router-dom";
import LogoImage from "assets/images/technodelogo.png";
import LogoSlim from "assets/images/technodelogosmall.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(menuIsOpen);
  const isSlim = useSelector(menuIsSlim);
  return (
    <section className={`${styles.sidebar_logo} ${isOpen ? styles.open : ""}`}>
      {isSlim ? (
        <>
          <Link
            to="/"
            onClick={() => dispatch(toggleMenu())}
            className={styles.sidebar_logo__slim}
          >
            <img src={LogoSlim} alt="Webfactory logo" />
          </Link>
          <Link
            to="/"
            onClick={() => dispatch(toggleMenu())}
            className={`${styles.sidebar_logo__wide} ${styles.hidden}`}
          ></Link>
        </>
      ) : (
        <Link
          to="/"
          onClick={() => dispatch(toggleMenu())}
          className={styles.sidebar_logo__wide}
        >
          <img src={LogoImage} alt="Webfactory Logo" />
        </Link>
      )}
    </section>
  );
};

export default Logo;
