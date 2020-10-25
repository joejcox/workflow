import React from "react";
import styles from "./TaskSelect.module.scss";

const TaskTabs = ({ taskTypes, change }) => {
  return (
    <section className={styles.task_options}>
      <select className={styles.task_select} onChange={(e) => change(e)}>
        {taskTypes.map((type) => {
          return <option key={type}>{type}</option>;
        })}
      </select>
    </section>
  );
};

export default TaskTabs;
