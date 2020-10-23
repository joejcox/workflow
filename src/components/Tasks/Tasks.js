import React, { useState, useEffect } from "react";
import styles from "./Tasks.module.scss";

const Tasks = () => {
  const [taskTab, setTaskTab] = useState({ activeTask: "All" });
  const [size, setSize] = useState({ width: 65, left: 0 });

  const taskTypes = [
    "All",
    "Quotes",
    "Domains",
    "SSL Setup",
    "SEO Setup",
    "Other",
  ];

  useEffect(() => {
    let activeBar;
    if (size) {
      activeBar = document.querySelector(".active_bar");
      activeBar.style.width = `${size.width}px`;
      activeBar.style.transform = `translate(${size.left}px, 0)`;
    }
  });

  const setActive = (e, type) => {
    setTaskTab({ activeTask: type });
    setSize(false);
    const activeBar = document.querySelector(".active_bar");
    activeBar.style.width = `${e.target.offsetWidth}px`;
    activeBar.style.transform = `translate(${e.target.offsetLeft}px, 0)`;
  };

  return (
    <>
      <div className={styles.tasks}>
        <div className={`active_bar ${styles.tasks__active}`}></div>
        {taskTypes.map((taskType) => {
          return (
            <button
              className={`${styles.task_tab} ${
                taskType === taskTab.activeTask
                  ? `${styles.task_tab__active} active`
                  : ""
              }`}
              key={taskType}
              onClick={(e) => setActive(e, taskType)}
            >
              {taskType}
            </button>
          );
        })}
      </div>
      <h3 className={styles.task_heading}>Tasks: {taskTab.activeTask}</h3>
    </>
  );
};

export default Tasks;
