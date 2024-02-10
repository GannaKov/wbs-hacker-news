/* eslint-disable react/prop-types */
//import { useState } from "react";
import styles from "../styles/Header.module.css";

const Header = ({ setQuery, query, setPage }) => {
  function handleChange(e) {
    setQuery(e.target.value);
    setPage(0);
  }
  return (
    <div className={styles.headerWrp}>
      <input
        className={styles.headerInput}
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default Header;
