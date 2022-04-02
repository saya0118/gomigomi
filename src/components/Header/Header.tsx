import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["header-container"]}>
        <h1 className={styles["header-title"]}>Voyage Notes</h1>
        <ul className={styles['header-ul']}>
          <li className={styles["header-list"]}>
            <a className={styles["header-link"]}>Home</a>
          </li>
          <li className={styles["header-list"]}>
            <a className={styles["header-link"]}>About</a>
          </li>
          <li className={styles["header-list"]}>
            <a className={styles["header-link"]}>Diary</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
