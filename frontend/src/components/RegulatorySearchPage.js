import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Results from './Results.js';
import SearchRow from './SearchRow.js';
import FiltersRow from './FiltersRow.js';
import PaginationHeader from './PaginationHeader.js';

const PageContainer = styled.div`
  padding: 40px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 40px;
`;

const RegulatorySearchPage = () => {
  const [items, setItems] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state
  const [searchValue, setSearchValue] = useState(''); // State to store search input

  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3101/search'); // Updated URL

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItems(data.items); // Assuming the API returns { items: [...] }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(items);

  // Filter items based on the search value
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Show loading message
  if (loading) {
    return (
      <PageContainer>
        <p>Loading...</p>
      </PageContainer>
    );
  }

  // Show error message if data fetching failed
  if (error) {
    return (
      <PageContainer>
        <p>Error: {error}</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Title>AI-Powered Regulatory Search</Title>
      <Subtitle>Use the search engine to search for publications from courts and regulators.</Subtitle>
      <SearchRow searchValue={searchValue} onSearchChange={setSearchValue} /> {/* Pass searchValue and onSearchChange */}
      <FiltersRow />
      <PaginationHeader />
      <Results items={filteredItems} /> {/* Pass filtered items to Results */}
    </PageContainer>
  );
};

export default RegulatorySearchPage;