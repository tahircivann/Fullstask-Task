import React from 'react';
import {
  ResultsContainer,
  ResultItemContainer,
  ResultItemWrapper,
  StyledDivider,
  NothingToShowText,
} from './Results.styles';
import ResultItem from './ResultItem';

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
        <NothingToShowText>
          No results found. Try adjusting your search or filters.
        </NothingToShowText>
      )}
    </ResultsContainer>
  );
};

export default Results;