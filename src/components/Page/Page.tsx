import React from "react";
import axios from 'axios';
import styles from "./Page.module.css";
import { Map } from "../Map";
import { SearchBox } from "../SearchBox";

export const Page = () => {
  return (
    <div className={styles["page"]}>
      <Map />
      <SearchBox />
    </div>
  );
};
