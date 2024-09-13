import styled from 'styled-components';

/** Container for the header */
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-bottom: 16px;
`;

/** Container for the results text */
export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/** Container for the controls */
export const ControlsContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

/** Title styling */
export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

/** Subtitle styling */
export const Subtitle = styled.p`
  font-size: 16px;
  color: #6e6e6e;
  margin: 0;
`;

/** Select dropdown styling */
export const Select = styled.select`
  padding: 12px 16px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #c9cccf;
  min-width: 100px;
  background-color: #fff;
  color: #000;
`;



export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  border: ${(props) => (props.isNav ? '1px solid #6F7170' : 'none')};
  background-color: ${(props) => (props.active ? '#ffff' : 'transparent')};
  color: ${(props) => (props.active ? '#26C281' : '#6F7170')};
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ddd;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ddd;
    color: #888;
  }
`;