import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  color: #6F7170;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: #008347;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const FiltersRow = ({ onSelectionChange, selectedFilterValues: nullableFilterValues }) => {
  const selectedFilterValues = nullableFilterValues || {
    categoryId: '',
    decisionId: '',
    companyId: '',
    publishDate: '',
  };

  const categories = [
    { id: 1, name: 'Banking' },
    { id: 2, name: 'Insurance' },
    { id: 3, name: 'Finance' },
  ];

  const decisions = [
    { id: 1, name: 'Approved' },
    { id: 2, name: 'Adopted' },
    { id: 3, name: 'In Review' },
  ];

  const companies = [
    { id: 1, name: 'Barclays' },
    { id: 2, name: 'HSBC' },
    { id: 3, name: 'Lloyds' },
  ];

  const [localFilterValues, setLocalFilterValues] = useState(selectedFilterValues);

  const handleSearchChange = (newValues) => {
    const updatedValues = { ...localFilterValues, ...newValues };
    setLocalFilterValues(updatedValues);
    onSelectionChange(updatedValues);
  };

  return (
    <FiltersContainer>
      <RowContainer>
        <Select
          id="category-select"
          value={localFilterValues.categoryId || ''}
          onChange={(e) => handleSearchChange({ categoryId: e.target.value })}
        >
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>

        <Select
          id="decision-select"
          value={localFilterValues.decisionId || ''}
          onChange={(e) => handleSearchChange({ decisionId: e.target.value })}
        >
          <option value="">Decision</option>
          {decisions.map((decision) => (
            <option key={decision.id} value={decision.id}>
              {decision.name}
            </option>
          ))}
        </Select>

        <Select
          id="company-select"
          value={localFilterValues.companyId || ''}
          onChange={(e) => handleSearchChange({ companyId: e.target.value })}
        >
          <option value="">Company</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </Select>

        <Input
          type="date"
          placeholder="Publish Date (e.g., Nov 18 2024)"
          color='#6F7170'
          value={localFilterValues.publishDate || ''}
          onChange={(e) => handleSearchChange({ publishDate: e.target.value })}
        />
      </RowContainer>

      <Button
        onClick={() => {
          handleSearchChange({
            categoryId: '',
            decisionId: '',
            companyId: '',
            publishDate: '',
          });
        }}
      >
        Clear Filters
      </Button>
    </FiltersContainer>
  );
};

export default FiltersRow;