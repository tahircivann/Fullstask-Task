import React from 'react';
import styled from 'styled-components';
import ResultItem from './ResultItem.js';

// Styled components
const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultItemWrapper = styled.div`
  margin-bottom: 40px;

  &:not(:first-child) {
    margin-top: 40px;
  }
`;

const StyledDivider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 0;
`;

const NothingToShowText = styled.p`
  margin-top: 40px;
  font-style: italic;
  font-size: 16px;
  color: #333;
`;

// Component with default empty array for items and optimized rendering
const Results = ({ items = [] }) => {
  return (
    <ResultsContainer>
      {items.length ? (
        items.map((item) => (
          <ResultItemContainer key={item.id || item.uniqueId}>
            <ResultItemWrapper>
              <ResultItem {...item} />
            </ResultItemWrapper>
            <StyledDivider />
          </ResultItemContainer>
        ))
      ) : (
        <NothingToShowText>No results found. Try adjusting your search or filters.</NothingToShowText>
      )}
    </ResultsContainer>
  );
};

export default Results;