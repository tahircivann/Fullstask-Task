import React from 'react';
import styled from 'styled-components';

// Styled components for Box, Typography, and Avatar

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 16px;
  padding-right: 64px;
  background-color: #FFFFFF;
`;

const NameText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
`;

const Avatar = styled.div`
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

function Header() {
    return (
        <HeaderWrapper>
            <NameText>Name Surname</NameText>
            <Avatar>CC</Avatar>
        </HeaderWrapper>
    );
}

export default Header;