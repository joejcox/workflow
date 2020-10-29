import React from "react";
import styles from "./TaskTabs.module.scss";

const TaskTabs = ({ taskTypes, click, activeTask, data }) => {
  return (
    <section className={styles.task_tabs}>
      <div className={`active_bar ${styles.task_tabs__active_bar}`}></div>
      {taskTypes.map((type) => {
        const numTasks = data.filter((task) =>
          type === "All" ? true : task.type === type
        ).length;
        return (
          <button
            className={`${styles.task_tab} ${
              type === activeTask ? `${styles.task_tab__active} active_btn` : ""
            }`}
            key={type}
            onClick={(e) => click(e, type)}
          >
            {type}{" "}
            {data.length > 0 ? (
              <span className={styles.num_tasks}>{numTasks}</span>
            ) : null}
          </button>
        );
      })}
    </section>
  );
};

export default TaskTabs;
