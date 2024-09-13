import styled from 'styled-components';

/** Container for the entire search row */
export const SearchRowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 64px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 32px;
  }
`;

/** Container for the input field */
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

/** Styled search input field */
export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  background: url('/assets/icons/search-icon.svg') no-repeat 10px center;
  background-size: 20px;

  &:focus {
    border-color: #26c281;
  }
`;

/** Styled search button */
export const SearchButton = styled.button`
  width: 193px;
  padding: 10px;
  background-color: #26c281;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e9f65;
  }

  &:disabled {
    background-color: #1e9f65;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

/** Hidden label for accessibility */
export const HiddenLabel = styled.label`
  position: absolute;
  left: -9999px;
  top: -9999px;
`;