import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchRowContainer,
  InputContainer,
  SearchInput,
  SearchButton,
  HiddenLabel,
} from './SearchRow.styles';

const SearchRow = ({ onSearchChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value === '') {
      onSearchChange('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearchChange(inputValue);
    }
  };

  const handleSearchClick = () => {
    onSearchChange(inputValue);
  };




  return (
    <SearchRowContainer>
      <InputContainer>
        <HiddenLabel htmlFor="search-input">Search</HiddenLabel>
        <SearchInput
          id="search-input"
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </InputContainer>
      <SearchButton
        onClick={handleSearchClick}
        disabled={!inputValue.trim()}
      >
        Search
      </SearchButton>
    </SearchRowContainer>
  );
};

SearchRow.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchRow;