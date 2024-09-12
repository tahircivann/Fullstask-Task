import React, { useCallback } from 'react';
import styled from 'styled-components';

// Styled components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-bottom: 16px;  // Add space between the results and the content
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;  
`;

const ControlsContainer = styled.div`
  display: flex;
  gap: 16px;  // Adjust the gap between the select elements

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;  // Ensure the font weight is bold
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 16px;  // Increase the size to match the design
  color: #6e6e6e;   // A subdued color for the subtitle
  margin: 0;
`;



const Select = styled.select`
  padding: 12px 16px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #c9cccf;
  min-width: 100px;
  background-color: #fff;
  color: #000;
`;

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
  const handlePaginationChange = useCallback((options) => {
    onPaginationChange?.({
      ...paginationOptions,
      ...options,
    });
  }, [onPaginationChange, paginationOptions]);

  const displayPageStart = (displayPage - 1) * displaySize;

  return (
    <HeaderContainer>
      <ResultsContainer>
        <Title>Results</Title>
        <Subtitle>
          Showing {displayItems > 0 ? displayPageStart + 1 : 0} - {displayPageStart + displayItems} of {displayTotal} results
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
            <option value="_">Sort by</option>
            <option value="publish_date">Date: Earliest First</option>
            <option value="-publish_date">Date: Latest First</option>
            <option value="title">Title: A to Z</option>
            <option value="-title">Title: Z to A</option>
          </Select>
      </ControlsContainer>
    </HeaderContainer>
  );
};

// Set default props to prevent errors
PaginationHeader.defaultProps = {
  paginationOptions: { size: 5, sortBy: '' },
  onPaginationChange: () => {},
  displayPage: 1,
  displaySize: 5,
  displayItems: 0,
  displayTotal: 0,
};

export default React.memo(PaginationHeader);