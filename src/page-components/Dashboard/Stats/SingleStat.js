import React from "react";
import styles from "./SingleStat.module.scss";
import { FaChartLine, FaPoundSign, FaReply, FaInfo } from "react-icons/fa";
import { BiErrorAlt, BiCommentDetail } from "react-icons/bi";

const SingleStat = ({ name, value, children }) => {
  let icon;
  switch (name) {
    case "Sales":
      icon = <FaChartLine />;
      break;
    case "Changes":
      icon = <FaPoundSign />;
      break;
    case "Quote Reply":
      icon = <FaReply />;
      break;
    case "Call Note":
      icon = <BiCommentDetail />;
      break;
    default:
      icon = <BiErrorAlt />;
  }

  return (
    <article className={styles.stat_card}>
      {children ? (
        <>
          <span className={styles.stat_card__info_icon}>
            <FaInfo />
          </span>
          <span className={styles.stat_card__info}>{children}</span>
        </>
      ) : null}

      <section className={styles.stat_card__inner}>
        <article className={styles.stat_card__wrapper}>
          <span className={styles.stat_card__icon}>{icon}</span>
        </article>
        <article className={styles.stat_card__content}>
          <h2 className={styles.stat_card__name}>{name}</h2>
          <p className={styles.stat_card__value}>{value}</p>
        </article>
      </section>
    </article>
  );
};

export default SingleStat;
