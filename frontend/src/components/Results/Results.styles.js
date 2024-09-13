import styled from 'styled-components';

/** Styled components for Results.js */
export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultItemWrapper = styled.div`
  margin-bottom: 40px;

  &:not(:first-child) {
    margin-top: 40px;
  }
`;

export const StyledDivider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 0;
`;

export const NothingToShowText = styled.p`
  margin-top: 40px;
  font-style: italic;
  font-size: 16px;
  color: #333;
`;

/** Styled components for ResultItem.js */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  gap: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PublishDate = styled.p`
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 20px;
`;

export const TitleLink = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: #26C281;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #6F7170;
`;

export const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DetailsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #6e6e6e;
  margin-bottom: 4px;
`;

export const OptionTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`;