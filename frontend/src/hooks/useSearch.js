import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3101';

export const useSearch = (searchValue, selectedFilters, sortBy, currentPage, resultsPerPage) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/search`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItems(data.items);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);  // Error logging
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper functions for filtering
  const getDecisionNameById = (decisionId) => {
    switch (decisionId) {
      case '1': return 'Approved';
      case '2': return 'Adopted';
      case '3': return 'In Review';
      default: return '';
    }
  };

  const getCategoryNameById = (categoryId) => {
    switch (categoryId) {
      case '1': return 'Banking';
      case '2': return 'Insurance';
      case '3': return 'Finance';
      default: return '';
    }
  };

  const getCompanyNameById = (companyId) => {
    switch (companyId) {
      case '1': return 'Barclays';
      case '2': return 'HSBC';
      case '3': return 'Lloyds';
      default: return '';
    }
  };

  // Filter items based on search input, filters, etc.
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
    const matchesPublishDate = selectedFilters.publishDate
      ? new Date(item.publish_date).toISOString().split('T')[0] === new Date(selectedFilters.publishDate).toISOString().split('T')[0]
      : true;

    return matchesSearch && matchesDecision && matchesCategory && matchesCompany && matchesPublishDate;
  });

  // Sort the items
  const sortItems = (items) => {
    const sortedItems = [...items];
    switch (sortBy) {
      case 'publish_date':
        return sortedItems.sort((a, b) => new Date(a.publish_date) - new Date(b.publish_date));
      case '-publish_date':
        return sortedItems.sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));
      case 'title':
        return sortedItems.sort((a, b) => a.title.localeCompare(b.title));
      case '-title':
        return sortedItems.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return items;
    }
  };

  const sortedItems = sortItems(filteredItems);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const paginatedItems = sortedItems.slice(startIndex, startIndex + resultsPerPage);

  return { items: paginatedItems, loading, error, totalItems: filteredItems.length };
};