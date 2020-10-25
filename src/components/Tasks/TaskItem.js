import React from "react";
import { Link } from "react-router-dom";
import { MdModeEdit, MdDeleteForever } from "react-icons/md";
import styles from "./TaskItem.module.scss";

const TaskItem = ({ name, days, daysDue, overdue }) => {
  return (
    <article className={styles.task}>
      <Link to="/" className={styles.task_name}>
        {name}
      </Link>

      <span
        className={`${styles.task_days} ${
          daysDue === 0 ? `${styles.task_days__today}` : ""
        } ${overdue ? `${styles.task_days__overdue}` : ""}`}
      >
        {days}
      </span>

      <div className={styles.task_buttons}>
        <button className={`${styles.task_button} ${styles.edit}`}>
          <MdModeEdit />
        </button>

        <button className={`${styles.task_button} ${styles.delete}`}>
          <MdDeleteForever />
        </button>
      </div>
    </article>
  );
};
export default TaskItem;
