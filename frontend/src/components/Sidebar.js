import React from 'react';
import styled from 'styled-components';
import { RiContactsBookLine } from "react-icons/ri";
import { LuHome } from "react-icons/lu"
import { MdOutlineHomeRepairService } from "react-icons/md";
import { IoDocumentTextOutline,IoSettingsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${({ theme }) => theme.palette.background.default};
  border-right: 1px solid ${({ theme }) => theme.palette.action.disabledBackground};
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(5)};
  gap: ${({ theme }) => theme.spacing(3)};
`;


const StyledIconButton = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${({ active }) => (active ? '#e4f6ed' : 'transparent')};
  cursor: pointer;

  &:hover {
    background-color: #e4f6ed;
  }

  svg {
    color: ${({ active }) => (active ? '#26C281' : '#b7e1cd')};
    transition: color 0.3s;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(12)};
  
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <IconContainer>
        <LogoContainer>
          <StyledIconButton>
          <img src="/icons/logo64.png" alt="logo" width="32px" height="32px" />
          </StyledIconButton>
        </LogoContainer>

        <StyledIconButton>
          <LuHome size="24px" />
        </StyledIconButton>

        <StyledIconButton>
          <MdOutlineHomeRepairService size="24px" />
        </StyledIconButton>

        <StyledIconButton>
          <RiContactsBookLine size="24px" />
        </StyledIconButton>

        <StyledIconButton>
          <IoDocumentTextOutline size="24px" />
        </StyledIconButton>

        <StyledIconButton active>
          <FiSearch size="24px" />
        </StyledIconButton>

        <StyledIconButton>
          <IoSettingsOutline size="24px" />
        </StyledIconButton>
        <StyledIconButton>
          <AiOutlineQuestionCircle size="24px" />
        </StyledIconButton>
      </IconContainer>
    </SidebarContainer>
  );
};

export default Sidebar;