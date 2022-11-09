import React from "react";
import "../App.css";

const Paginate = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="paginate">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className={`page-link ${number === currentPage ? "page-active" : ""}`}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
