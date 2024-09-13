import React, { useCallback } from 'react';
import {
  HeaderContainer,
  ResultsContainer,
  ControlsContainer,
  Title,
  Subtitle,
  Select,
} from './Pagination.styles';

const PaginationHeader = (props) => {
  const {
    paginationOptions,
    onPaginationChange,
    displayPage,
    displaySize,
    displayItems,
    displayTotal,
  } = props;

  // Memoize pagination change handler for performance
  const handlePaginationChange = useCallback(
    (options) => {
      onPaginationChange?.({
        ...paginationOptions,
        ...options,
      });
    },
    [onPaginationChange, paginationOptions]
  );

  const displayPageStart = (displayPage - 1) * displaySize;

  return (
    <HeaderContainer>
      <ResultsContainer>
        <Title>Results</Title>
        <Subtitle>
          Showing {displayItems > 0 ? displayPageStart + 1 : 0} -{' '}
          {displayPageStart + displayItems} of {displayTotal} results
        </Subtitle>
      </ResultsContainer>
      <ControlsContainer>
        <Select
          id="select-results-per-page"
          value={paginationOptions.size}
          onChange={(e) => handlePaginationChange({ size: Number(e.target.value) })}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </Select>
        <Select
          id="select-sort-by"
          value={paginationOptions.sortBy || ''}
          onChange={(e) => handlePaginationChange({ sortBy: e.target.value })}
        >
          <option value="">Sort by</option>
          <option value="publish_date">Date: Earliest First</option>
          <option value="-publish_date">Date: Latest First</option>
          <option value="title">Title: A to Z</option>
          <option value="-title">Title: Z to A</option>
        </Select>
      </ControlsContainer>
    </HeaderContainer>
  );
};

export default React.memo(PaginationHeader);