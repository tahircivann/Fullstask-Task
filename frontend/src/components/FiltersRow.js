import React, { useState } from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  gap: 16px;
`;

const RowContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
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
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: #008347;;
  border: none;
  cursor: pointer;
  font-size: 16px;
  height: 20px;
  weight: 500px;
  size: 14px;
  line-height: 20px;
  align-items: center;
  &:hover {
    text-decoration: underline;
  };
  gap : 10px;
`;
const FiltersRow = ({ onSelectionChange, selectedFilterValues: nullableFilterValues }) => {
  const selectedFilterValues = nullableFilterValues || {
    categoryId: [],
    decisionId: [],
    companyId: [],
    publishDate: null,
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
    onSelectionChange(updatedValues); // Pass the updated values to the parent component
  };

  return (
    <FiltersContainer>
      <RowContainer>
        <Select
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
          value={localFilterValues.publishDate || ''}
          onChange={(e) => handleSearchChange({ publishDate: e.target.value })}
        />
      </RowContainer>

      <Button
        onClick={() => {
          handleSearchChange({
            categoryId: null,
            decisionId: null,
            companyId: null,
            publishDate: null,
          });
        }}
      >
        Clear Filters
      </Button>
    </FiltersContainer>
  );
};

export default FiltersRow;