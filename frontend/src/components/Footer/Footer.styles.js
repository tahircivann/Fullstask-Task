import styled from 'styled-components';

/** Container for the entire footer */
export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.footerBackground || '#F9FAFB'};
  padding: 40px 64px 40px 170px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

/** Section within the footer */
export const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  margin-bottom: 24px;
  gap: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

/** Column within the footer */
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${(props) => (props.flexGrow ? 1 : 'auto')};
  align-items: ${(props) => (props.alignStart ? 'flex-start' : 'stretch')};
  gap: ${(props) => (props.spacing ? `${props.spacing * 8}px` : '8px')};
`;

/** Logo image */
export const Logo = styled.img`
  height: 32px;
`;

/** Text used in the footer */
export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.footerText || '#6F7170'};
  font-size: 1rem;
  margin: 0;
`;

/** Title text in the footer */
export const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

/** Container for social media icons */
export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;

  img {
    height: 24px;
  }
`;

/** Bottom section of the footer */
export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

/** Divider line */
export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #E4E5E7;
  margin: 22px 0;
  width: 100%;
`;