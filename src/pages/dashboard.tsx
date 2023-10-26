import React from "react";
import styles from "../styles/task.module.css";
import logo from "../../public/logo.svg";

const TaskNav = () => {
  return (
    <div className={styles.box}>
      <div className={styles.navigation}>
        <div className={styles.group}>
          <div className={styles.samantha}>Projects</div>
          <div className={styles.textwrapper}>Settings</div>
          <div className={styles.div}>Help</div>
        </div>
        <div className={styles.group2}>
          <div className={styles.samantha2}>TASK</div>
          <div className={styles.overlapgroupwrapper}>
            <div className={styles.overlapgroup}>
              <div className={styles.samantha3}>T</div>
            </div>
          </div>
        </div>
        <div className={styles.overlapwrapper}>
          <div className={styles.overlap}>
            <div className={styles.samantha4}>Search everything</div>
            <img className={styles.img} alt="Group" src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskNav;
