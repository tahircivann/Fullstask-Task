import React from 'react';
import {
  HeaderWrapper,
  NameText,
  Avatar,
} from './Header.styles';

function Header() {
  return (
    <HeaderWrapper>
      <NameText>Name Surname</NameText>
      <Avatar>CC</Avatar>
    </HeaderWrapper>
  );
}

export default Header;