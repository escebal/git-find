import React from "react";
import "./Pagination.css";

function Pagination({ onPrevious, onNext }) {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button onClick={handlePrevious}>Previous</button>
        </li>
        <li>
          <button onClick={handleNext}>After</button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
