import React from 'react';
import styled from 'styled-components';
import ResultItem from './ResultItem.js';

const Results = (props) => {
  const { items } = props;

  
  
  return (
    <ResultsContainer>
      {items?.length ? items.map((item, index) => (
        <ResultItemContainer key={index}>
          <ResultItemWrapper marginTop={index ? 5 : 0}>
            <ResultItem {...item} />
          </ResultItemWrapper>
          <StyledDivider />
        </ResultItemContainer>
      )) : <NothingToShowText>Nothing to show</NothingToShowText>}
    </ResultsContainer>
  );
};

export default Results;

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
  margin-top: ${({ marginTop }) => `${marginTop * 8}px`};
  margin-bottom: 40px;
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