import React from 'react';
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

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid// Match the border color from the design
  border-radius: 4px;
  padding: 12px 16px;
  gap: 4px;  // Add small spacing between label and select
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
    paginationOptions: nullablePaginationOptions,
    onPaginationChange,
    displayPage,
    displaySize,
    displayItems,
    displayTotal,
  } = props;

  const paginationOptions = nullablePaginationOptions || {
    size: 5,
    sortBy: '-publish_date',
  };

  const handlePaginationChange = (options) => {
    onPaginationChange?.({
      ...paginationOptions,
      ...options,
    });
  };

  const displayPageStart = (displayPage - 1) * displaySize;

  return (
    <HeaderContainer>
      <ResultsContainer>
        <Title>Results</Title>
        <Subtitle>
          Showing {displayPageStart + displayItems ? 1 : 0}-
          {displayPageStart + displayItems} of {displayTotal} results
        </Subtitle>
      </ResultsContainer>
      <ControlsContainer>
        <SelectContainer>
          <Select
            value={paginationOptions.size}
            onChange={(e) => handlePaginationChange({ size: Number(e.target.value) })}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </Select>
        </SelectContainer>
        <SelectContainer>
          <Select
            id="select-sort-by"
            value={paginationOptions.sortBy || ''}
            onChange={(e) => handlePaginationChange({ sortBy: e.target.value })}
          >
            <option value="publish_date">Date: Earliest First</option>
            <option value="-publish_date">Date: Latest First</option>
            <option value="title">Title: A to Z</option>
            <option value="-title">Title: Z to A</option>
          </Select>
        </SelectContainer>
      </ControlsContainer>
    </HeaderContainer>
  );
};

export default PaginationHeader;

