import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchRowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 64px; /* This is equivalent to MUI's marginTop: 8 */
  gap: 16px; /* For spacing between search input and button */
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  padding-left: 40px; /* For adding space for the search icon */
  background: url('icons/search-icon.svg') no-repeat 10px center; /* Example of adding the search icon */
  background-size: 20px; /* Set the size of the search icon */
`;

const SearchButton = styled.button`
  width: 193px;
  padding: 10px;
  background-color: #1976d2;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #26C281;
`;

const SearchRow = ({ searchValue, onSearchChange }) => {
  const [newSearchValue, setNewSearchValue] = useState('');

  const handleSearchChange = () => {
    onSearchChange(newSearchValue); // Pass newSearchValue up to the parent component
  };

  useEffect(() => {
    setNewSearchValue(searchValue);
  }, [searchValue]);

  useEffect(() => {
    if (newSearchValue === '') {
      onSearchChange('');
    }
  }
  , [newSearchValue, onSearchChange]);


  return (
    <SearchRowContainer>
      <InputContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={newSearchValue}
          onChange={(event) => setNewSearchValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSearchChange(); // Trigger search on Enter
            }
          }}
        />
      </InputContainer>
      <SearchButton
        onClick={handleSearchChange} // Trigger search on button click
        disabled={!newSearchValue}
      >
        Search
      </SearchButton>
    </SearchRowContainer>
  );
};
export default SearchRow;