import styled from 'styled-components';

/** Wrapper for the header */
export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 16px;
  padding-right: 64px;
  background-color: #FFFFFF;

  @media (max-width: 768px) {
    padding-right: 16px;
  }
`;

/** Text displaying the user's name */
export const NameText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
`;

/** Styled avatar */
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  margin-left: 16px;
  border-radius: 50%;
  background-color: #2baf63;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;