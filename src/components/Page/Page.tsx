import React from "react";
import styles from "./Page.module.css";
import { SearchBox } from "../SearchBox";

export const Page = () => {
  return (
    <div className={styles["page"]}>
      <SearchBox />
    </div>
  );
};
