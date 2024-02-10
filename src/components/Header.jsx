/* eslint-disable react/prop-types */
//import { useState } from "react";

const Header = ({ setQuery, query }) => {
  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <div>
      <input value={query} onChange={handleChange} />
    </div>
  );
};

export default Header;
