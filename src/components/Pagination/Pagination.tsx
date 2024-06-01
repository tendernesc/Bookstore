import React from 'react';
import './Pagination.css';
import {IPaginationProps} from '../../types/interfaces'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const Pagination: React.FC<IPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    onPageChange(page);
    scrollToTop();
  };

  return (
    <div className="pagination">
      {pages.map(page => (
        <span
          key={page}
          className={`page-item ${page === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
