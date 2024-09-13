import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchRowContainer,
  InputContainer,
  SearchInput,
  SearchButton,
  HiddenLabel,
} from './SearchRow.styles';

const SearchRow = ({ searchValue, onSearchChange }) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearchChange(searchValue);
    }
  };

  return (
    <SearchRowContainer>
      <InputContainer>
        <HiddenLabel htmlFor="search-input">Search</HiddenLabel>
        <SearchInput
          id="search-input"
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </InputContainer>
      <SearchButton
        onClick={() => onSearchChange(searchValue)}
        disabled={!searchValue}
      >
        Search
      </SearchButton>
    </SearchRowContainer>
  );
};

SearchRow.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchRow;