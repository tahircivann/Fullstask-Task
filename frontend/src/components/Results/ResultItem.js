import React from 'react';
import {
  Container,
  Header,
  PublishDate,
  TitleLink,
  Description,
  DetailsRow,
  DetailsColumn,
  Label,
  OptionTitle,
} from './Results.styles';

const ResultItem = React.memo(
  ({ id, title, description, publish_date, category, company, decision }) => {
    const formatDateToMMMDDYYYY = (dateStr) => {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat('en-EG', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }).format(date);
    };

    return (
      <Container>
        <Header>
          <PublishDate>{formatDateToMMMDDYYYY(publish_date)}</PublishDate>
        </Header>
        <h2>
          <TitleLink
            href={`/regulations/${id}`}
            aria-label={`View details about ${title}`}
          >
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
  }
);

export default ResultItem;