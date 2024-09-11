import React from 'react';
import styled from 'styled-components';

const ResultItem = (props) => {
  const { id, title, description, publish_date, category, company, decision } = props;
  
  return (
    <Container>
      <Header>
        <PublishDate>{publish_date}</PublishDate>
      </Header>
      <TitleLink href={`/regulations/${id}`}>
        {title}
      </TitleLink>
      <Description>{description}</Description>
      <DetailsRow>
        <DetailsColumn>
          <Label>Category</Label>
          <OptionTitle>{category.name}</OptionTitle>
        </DetailsColumn>
        <DetailsColumn>
          <Label>Company</Label>
          <OptionTitle>{company.name}</OptionTitle>
        </DetailsColumn>
        <DetailsColumn>
          <Label>Decision</Label>
          <OptionTitle>{decision.name}</OptionTitle>
        </DetailsColumn>
      </DetailsRow>
    </Container>
  );
};

export default ResultItem;

// Styled components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  gap: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PublishDate = styled.p`
  font-size: 14px;
  color: #333;  
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

const TitleLink = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: #26C281;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const DetailsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 12px;
  color: #6e6e6e;
  margin-bottom: 4px;
`;

const OptionTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`;