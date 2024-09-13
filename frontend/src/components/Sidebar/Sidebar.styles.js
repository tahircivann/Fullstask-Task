import styled from 'styled-components';

/** Container for the entire sidebar */
export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background};
  border-right: 1px solid ${({ theme }) => theme.palette.action.disabledBackground || '#e0e0e0'};
  width: 80px;

  @media (max-width: 768px) {
    width: 60px;
  }
`;

/** Container for the icons */
export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => (theme.spacing ? theme.spacing(5) : '40px')};
  gap: ${({ theme }) => (theme.spacing ? theme.spacing(3) : '24px')};
`;

/** Styled button for icons */
export const StyledIconButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  background: ${({ active }) => (active ? '#e4f6ed' : 'transparent')};
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e4f6ed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(38, 194, 129, 0.5);
  }

  svg {
    color: ${({ active }) => (active ? '#26C281' : '#b7e1cd')};
    transition: color 0.3s;
  }
`;

/** Container for the logo */
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => (theme.spacing ? theme.spacing(12) : '96px')};
`;
