import styled from 'styled-components';

/** Container for the entire filters row */
export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

/** Container for the row of filter controls */
export const RowContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/** Styled input field */
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  ::placeholder {
    color: #6f7170;
  }
`;

/** Styled select dropdown */
export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #6f7170;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

/** Styled button for clearing filters */
export const Button = styled.button`
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