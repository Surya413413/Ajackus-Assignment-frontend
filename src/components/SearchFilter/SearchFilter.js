import React from "react";
import "./SearchFilter.css";

function SearchFilter({ searchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name, email, department..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchFilter;
