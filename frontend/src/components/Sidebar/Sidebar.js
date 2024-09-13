import React from 'react';
import PropTypes from 'prop-types';
import {
  SidebarContainer,
  IconContainer,
  StyledIconButton,
  LogoContainer,
} from './Sidebar.styles';
import { RiContactsBookLine } from "react-icons/ri";
import { LuHome } from "react-icons/lu";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { IoDocumentTextOutline, IoSettingsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Sidebar = ({ activePage }) => {
  return (
    <SidebarContainer>
      <IconContainer>
        <LogoContainer>
          <StyledIconButton aria-label="Logo">
            <img src="/icons/logo64.png" alt="logo" width="32px" height="32px" />
          </StyledIconButton>
        </LogoContainer>

        <StyledIconButton aria-label="Home" active={activePage === 'home'}>
          <LuHome size="24px" />
        </StyledIconButton>

        <StyledIconButton aria-label="Services" active={activePage === 'services'}>
          <MdOutlineHomeRepairService size="24px" />
        </StyledIconButton>

        <StyledIconButton aria-label="Contacts" active={activePage === 'contacts'}>
          <RiContactsBookLine size="24px" />
        </StyledIconButton>

        <StyledIconButton aria-label="Documents" active={activePage === 'documents'}>
          <IoDocumentTextOutline size="24px" />
        </StyledIconButton>

        <StyledIconButton aria-label="Search" active={activePage === 'search'}>
          <FiSearch size="24px" />
        </StyledIconButton>

        <StyledIconButton aria-label="Settings" active={activePage === 'settings'}>
          <IoSettingsOutline size="24px" />
        </StyledIconButton>

        <StyledIconButton aria-label="Help" active={activePage === 'help'}>
          <AiOutlineQuestionCircle size="24px" />
        </StyledIconButton>
      </IconContainer>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  activePage: PropTypes.string,
};

export default Sidebar;