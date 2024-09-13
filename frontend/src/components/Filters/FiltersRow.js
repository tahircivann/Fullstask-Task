import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FiltersContainer,
  RowContainer,
  Input,
  Select,
  Button,
} from './FiltersRow.styles';

import { categories, decisions, companies } from '../../constants/filtersData';


const FiltersRow = ({ onSelectionChange, selectedFilterValues = {} }) => {
  const initialFilterValues = {
    categoryId: '',
    decisionId: '',
    companyId: '',
    publishDate: '',
    ...selectedFilterValues,
  };

  const [localFilterValues, setLocalFilterValues] = useState(initialFilterValues);


  const handleFilterChange = (newValues) => {
    const updatedValues = { ...localFilterValues, ...newValues };
    setLocalFilterValues(updatedValues);
    onSelectionChange(updatedValues);
  };

  return (
    <FiltersContainer>
      <RowContainer>
        <Select
          id="category-select"
          aria-label="Category"
          value={localFilterValues.categoryId}
          onChange={(e) => handleFilterChange({ categoryId: e.target.value })}
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
          aria-label="Decision"
          value={localFilterValues.decisionId}
          onChange={(e) => handleFilterChange({ decisionId: e.target.value })}
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
          aria-label="Company"
          value={localFilterValues.companyId}
          onChange={(e) => handleFilterChange({ companyId: e.target.value })}
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
          aria-label="Publish Date"
          value={localFilterValues.publishDate}
          onChange={(e) => handleFilterChange({ publishDate: e.target.value })}
        />
      </RowContainer>

      <Button
        type="button"
        onClick={() =>
          handleFilterChange({
            categoryId: '',
            decisionId: '',
            companyId: '',
            publishDate: '',
          })
        }
      >
        Clear Filters
      </Button>
    </FiltersContainer>
  );
};

FiltersRow.propTypes = {
  onSelectionChange: PropTypes.func.isRequired,
  selectedFilterValues: PropTypes.shape({
    categoryId: PropTypes.string,
    decisionId: PropTypes.string,
    companyId: PropTypes.string,
    publishDate: PropTypes.string,
  }),
};


export default FiltersRow;