import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import styles from "./Tasks.module.scss";
import tasks_data from "data/tasks_data.json";

const Tasks = () => {
  const [taskTab, setTaskTab] = useState({ activeTask: "All" });
  const [size, setSize] = useState({ width: 65, left: 0 });
  const [tasksData, setTasksData] = useState(tasks_data);

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

  const getDaysDue = (days) => {
    const { days_due, overdue } = days;
    if (overdue === true) {
      return `${Math.abs(days_due)} days overdue`;
    } else if (days_due === 0) {
      return "Today";
    } else if (days_due === 1) {
      return `${days_due} day`;
    } else if (days_due > 1) {
      return `${days_due} days`;
    } else {
      return "Error in switch statement";
    }
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
      <section className={styles.tasks_list}>
        {tasksData
          .sort((a, b) => a.days.days_due - b.days.days_due)
          .filter((task) =>
            taskTab.activeTask === "All"
              ? true
              : task.type === taskTab.activeTask
          )
          .map(
            ({
              customer_id,
              account_name,
              days,
              days: { days_due, overdue },
            }) => {
              return (
                <TaskItem
                  key={customer_id}
                  name={account_name}
                  days={getDaysDue(days)}
                  overdue={overdue}
                  daysDue={days_due}
                />
              );
            }
          )}
      </section>
    </>
  );
};

export default Tasks;
