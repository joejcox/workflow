import React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "redux/tasks/tasksSlice";
import { Link } from "react-router-dom";
import { MdModeEdit, MdDeleteForever } from "react-icons/md";
import styles from "./TaskItem.module.scss";

const TaskItem = ({ id, name, days, daysDue, overdue, type }) => {
  const dispatch = useDispatch();
  return (
    <article
      className={`
    ${styles.task} 
    ${daysDue === 0 ? `${styles.today}` : ""} 
    ${overdue === true ? `${styles.overdue}` : ""}
    `}
    >
      <Link to="/" className={styles.task_name}>
        {name}
      </Link>

      <span
        className={`${styles.task_days} ${
          daysDue === 0 ? `${styles.task_days__today}` : ""
        } ${overdue ? `${styles.task_days__overdue}` : ""}`}
      >
        <strong>{type}</strong>: {days}
      </span>

      <div className={styles.task_buttons}>
        <button className={`${styles.task_button} ${styles.edit}`}>
          <MdModeEdit />
        </button>

        <button
          className={`${styles.task_button} ${styles.delete}`}
          onClick={() => dispatch(removeTask(id))}
        >
          <MdDeleteForever />
        </button>
      </div>
    </article>
  );
};
export default TaskItem;
