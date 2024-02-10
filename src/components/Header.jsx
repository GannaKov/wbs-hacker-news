/* eslint-disable react/prop-types */
//import { useState } from "react";

const Header = ({ setQuery, query, setPage }) => {
  function handleChange(e) {
    setQuery(e.target.value);
    setPage(0);
  }
  return (
    <div>
      <input value={query} onChange={handleChange} />
    </div>
  );
};

export default Header;
