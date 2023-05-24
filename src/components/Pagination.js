import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrevPage}> Previous </button>
      <span> {currentPage} </span> / <span> {totalPages} </span>
      <button onClick={handleNextPage}> Next </button>
    </div>
  );
};

export default Pagination;