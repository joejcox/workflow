import React from "react";
import { MdModeEdit, MdDeleteForever } from "react-icons/md";
import styles from "./TaskItem.module.scss";

const TaskItem = ({ name, days }) => {
  return (
    <article className={styles.task}>
      <span className={styles.task_name}>{name}</span>

      <span className={`${styles.task_days}`}>{days}</span>

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
