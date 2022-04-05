import React from "react";
import styles from "./SearchBox.module.css";
import { SearchBar } from "../SearchBar";

export const SearchBox = () => {
  return (
    <div className={styles["search-box"]}>
      <SearchBar />
    </div>
  );
};
