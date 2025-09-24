import React from "react";
import "./Pagination.css";

function Pagination({ totalUsers, usersPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={currentPage === i + 1 ? "active" : ""}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
