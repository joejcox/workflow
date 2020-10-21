import React from "react";
import SingleStat from "./SingleStat";
import styles from "./Stats.module.scss";

const Stats = () => {
  return (
    <div className={styles.stats_container}>
      <SingleStat name="Sales" value="71.3%">
        Here is some important information
      </SingleStat>
      <SingleStat name="Changes" value="£0.23">
        Some more information can go here but do you have it?
      </SingleStat>
      <SingleStat name="Quote Reply" value="2h 23m">
        No idea what to write here
      </SingleStat>
      <SingleStat name="Call Note" value="10m 56s">
        More info!
      </SingleStat>
    </div>
  );
};

export default Stats;
