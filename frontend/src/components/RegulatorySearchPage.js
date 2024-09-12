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
  const [selectedFilters, setSelectedFilters] = useState({}); // State to store selected filters
  const [resultsPerPage, setResultsPerPage] = useState(5); // State to store the number of results per page
  const [currentPage, setCurrentPage] = useState(1); // State to store current page
  // Helper function to get decision name by ID
  const getDecisionNameById = (decisionId) => {
    switch (decisionId) {
      case '1':
        return 'Approved';
      case '2':
        return 'Adopted';
      case '3':
        return 'In Review';
      default:
        return '';
    }
  }

  const getCategoryNameById = (categoryId) => {
    switch (categoryId) {
      case '1':
        return 'Banking';
      case '2':
        return 'Insurance';
      case '3':
        return 'Finance';
      default:
        return '';
    }
  }

  const getCompanyNameById = (companyId) => {
    switch (companyId) {
      case '1':
        return 'Barclays';
      case '2':
        return 'HSBC';
      case '3':
        return 'Lloyds';
      default:
        return '';
    }
  }
  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3101/search'); // Updated URL

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItems(data.items); // { items: [...] }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter items based on the search value and selected filters
  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchValue.toLowerCase());

    const matchesDecision = selectedFilters.decisionId 
      ? item.decision.name === getDecisionNameById(selectedFilters.decisionId) 
      : true;

    const matchesCategory = selectedFilters.categoryId
      ? item.category.name === getCategoryNameById(selectedFilters.categoryId)
      : true;

    const matchesCompany = selectedFilters.companyId
      ? item.company.name === getCompanyNameById(selectedFilters.companyId)
      : true;
    
    return matchesSearch && matchesDecision && matchesCategory && matchesCompany;
  });

  // Calculate pagination
  const startIndex = (currentPage - 1) * resultsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + resultsPerPage);

  // Handle pagination change
  const handlePaginationChange = (paginationOptions) => {
    if (paginationOptions.size) {
      setResultsPerPage(paginationOptions.size);
      setCurrentPage(1); // Reset to first page when page size changes
    }
  };

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
      <FiltersRow selectedFilterValues={selectedFilters} onSelectionChange={setSelectedFilters} /> {/* Pass selectedFilterValues and onSelectionChange */}
      <PaginationHeader
        paginationOptions={{ size: resultsPerPage }}
        onPaginationChange={handlePaginationChange}
        displayPage={currentPage}
        displaySize={resultsPerPage}
        displayItems={paginatedItems.length}
        displayTotal={filteredItems.length}
      />
      <Results items={paginatedItems} /> {/* Pass paginated items to Results */}
    </PageContainer>
  );
};

export default RegulatorySearchPage;