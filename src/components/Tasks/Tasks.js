import React, { useState, useEffect } from "react";
import SectionHeading from "components/SectionHeading/SectionHeading";
import TaskSelect from "./TaskSelect";
import TaskTabs from "./TaskTabs";
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
    const activeBar = document.querySelector(".active_bar");
    const active = document.querySelector(".active_btn");
    if (size) {
      activeBar.style.width = `${active.offsetWidth}px`;
      activeBar.style.transform = `translate(${active.offsetLeft}px, ${active.offsetTop}px)`;
    }
  });

  const setActive = (e, type) => {
    setTaskTab({ activeTask: type });
    setSize(false);
    const activeBar = document.querySelector(".active_bar");
    activeBar.style.width = `${e.target.offsetWidth}px`;
    activeBar.style.transform = `translate(${e.target.offsetLeft}px, ${e.target.offsetTop}px)`;
  };

  const changeActive = (e) => {
    setTaskTab({ activeTask: e.target.value });
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
    <article className="tasks">
      <TaskTabs
        taskTypes={taskTypes}
        click={setActive}
        activeTask={taskTab.activeTask}
        data={tasksData}
      />
      <TaskSelect taskTypes={taskTypes} change={changeActive} />
      <SectionHeading>Tasks: {taskTab.activeTask}</SectionHeading>
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
    </article>
  );
};

export default Tasks;
