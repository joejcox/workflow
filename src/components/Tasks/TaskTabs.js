import React from "react";
import styles from "./TaskTabs.module.scss";

const TaskTabs = ({ taskTypes, click, activeTask }) => {
  return (
    <div className={styles.task_tabs}>
      <div className={`active_bar ${styles.task_tabs__active_bar}`}></div>
      {taskTypes.map((type) => {
        return (
          <button
            className={`${styles.task_tab} ${
              type === activeTask ? `${styles.task_tab__active} active` : ""
            }`}
            key={type}
            onClick={(e) => click(e, type)}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
};

export default TaskTabs;
