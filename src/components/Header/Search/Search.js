import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.search_bar}
        placeholder="Search accounts..."
      />
      <button className={styles.search_icon}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
