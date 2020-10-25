import React from "react";
import { MdModeEdit, MdDeleteForever } from "react-icons/md";
import styles from "./TaskItem.module.scss";

const TaskItem = ({ name, days, daysDue, overdue }) => {
  return (
    <article className={styles.task}>
      <span className={styles.task_name}>{name}</span>

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