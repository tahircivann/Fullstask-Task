import React from 'react';
import { PaginationContainer, PaginationButton } from './Pagination.styles';


const Pagination = ({ count, page, onChange }) => {
    const pages = Array.from({ length: count }, (_, i) => i + 1);
  
    return (
      <PaginationContainer>
        <PaginationButton
          disabled={page === 1}
          onClick={() => onChange(null, page - 1)}
          isNav
        >
          {'<'}
        </PaginationButton>
        {pages.map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            active={pageNumber === page}
            onClick={() => onChange(null, pageNumber)}
          >
            {pageNumber}
          </PaginationButton>
        ))}
        <PaginationButton
          disabled={page === count}
          onClick={() => onChange(null, page + 1)}
          isNav
        >
          {'>'}
        </PaginationButton>
      </PaginationContainer>
    );
};

export default Pagination;