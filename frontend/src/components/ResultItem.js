import React from 'react';
import styled from 'styled-components';

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
  font-size: 14px;
  color: #6F7170;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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

const ResultItem = React.memo(({ id, title, description, publish_date, category, company, decision }) => {
  // Memoized date formatting function
  const formatDateToMMMDDYYYY = (dateStr) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-EG', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  return (
    <Container>
      <Header>
        <PublishDate>{formatDateToMMMDDYYYY(publish_date)}</PublishDate>
      </Header>
      <h2>
        <TitleLink href={`/regulations/${id}`} aria-label={`View details about ${title}`}>
          {title}
        </TitleLink>
      </h2>
      <Description>{description}</Description>
      <DetailsRow>
        <DetailsColumn>
          <Label>Category</Label>
          <OptionTitle>{category?.name || 'Unknown'}</OptionTitle>
        </DetailsColumn>
        <DetailsColumn>
          <Label>Decision</Label>
          <OptionTitle>{decision?.name || 'Unknown'}</OptionTitle>
        </DetailsColumn>
        <DetailsColumn>
          <Label>Company</Label>
          <OptionTitle>{company?.name || 'Unknown'}</OptionTitle>
        </DetailsColumn>
      </DetailsRow>
    </Container>
  );
});

export default ResultItem;