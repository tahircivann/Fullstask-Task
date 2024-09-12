import React, { useState } from 'react';
import styled from 'styled-components';
import { useDebounce } from '../hooks/useDebounce';
import { useSearch } from '../hooks/useSearch';
import Results from '../components/Results';
import SearchRow from '../components/SearchRow';
import FiltersRow from '../components/FiltersRow';
import PaginationHeader from '../components/PaginationHeader';

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



const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({});
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('');

  const debouncedSearchValue = useDebounce(searchValue, 300); // Debounce search input by 300ms
  const { items, loading, error, totalItems } = useSearch(debouncedSearchValue, selectedFilters, sortBy, currentPage, resultsPerPage);

  const handlePaginationChange = (paginationOptions) => {
    if (paginationOptions.size) {
      setResultsPerPage(paginationOptions.size);
      setCurrentPage(1); // Reset to first page when page size changes
    }
    if (paginationOptions.sortBy) {
      setSortBy(paginationOptions.sortBy);
    }
  };

  if (loading) return <PageContainer>Loading...</PageContainer>;
  if (error) return <PageContainer>Error: {error}</PageContainer>;

  return (
    <PageContainer>
      <Title>AI-Powered Regulatory Search</Title>
      <Subtitle>Use the search engine to search for publications from courts and regulators.</Subtitle>
      <SearchRow searchValue={searchValue} onSearchChange={setSearchValue} />
      <FiltersRow selectedFilterValues={selectedFilters} onSelectionChange={setSelectedFilters} />
      <PaginationHeader
        paginationOptions={{ size: resultsPerPage, sortBy }}
        onPaginationChange={handlePaginationChange}
        displayPage={currentPage}
        displaySize={resultsPerPage}
        displayItems={items.length}
        displayTotal={totalItems}
      />
      <Results items={items} />

    </PageContainer>
  );
};

export default SearchPage;