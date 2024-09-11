import React from 'react';
import styled from 'styled-components';



const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.footerBackground};
  padding: 40px 64px 40px 170px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  margin-bottom: 24px;
  gap: 64px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${(props) => (props.flexGrow ? 1 : 'auto')};
  align-items: ${(props) => (props.alignStart ? 'start' : 'stretch')};
  gap: ${(props) => (props.spacing ? `${props.spacing * 8}px` : '8px')};
`;

const Logo = styled.img`
  height: 32px;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.footerText};
  font-size: 1rem;
`;

const FooterTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;

  img {
    height: 24px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid ;
  margin: 22px 0;
  color:#E4E5E7
`;

const Footer = () => (
  <FooterContainer>
    <FooterSection>
      <Column flexGrow alignStart spacing={2}>
        <Logo src="icons/logo-with-text.svg" alt="logo" />
        <FooterText>Justice for all.</FooterText>
        <FooterText>
          hello@courtcorrect.com <br />
          33 Percy St, London W1T 2DF <br />
          020 7867 3925
        </FooterText>
      </Column>
      <Column spacing={2}>
        <FooterTitle>Quick Links</FooterTitle>
        <FooterText>Home</FooterText>
        <FooterText>Data</FooterText>
        <FooterText>Cases</FooterText>
        <FooterText>Customers</FooterText>
        <FooterText>Search Engine</FooterText>
        <FooterText>Custom Fields</FooterText>
        <FooterText>Support</FooterText>
      </Column>
      <Column spacing={2}>
        <FooterTitle>Legals</FooterTitle>
        <FooterText>Terms & Conditions</FooterText>
        <FooterText>Privacy Policy</FooterText>
        <FooterText>AI Safety Policy</FooterText>
        <FooterText>Cookie Policy</FooterText>
        <FooterText>Compliance Statement</FooterText>
      </Column>
    </FooterSection>
    <Divider />
    <FooterBottom>
      <FooterText>© 2023 CourtCorrect LTD</FooterText>
      <SocialIcons>
        <img src="icons/icons8-facebook.svg" alt="facebook" />
        <img src="icons/icons8-twitter.svg" alt="twitter" />
        <img src="icons/icons8-instagram.svg" alt="instagram" />
        <img src="icons/icons8-youtube.svg" alt="youtube" />
        <img src="icons/icons8-linkedin.svg" alt="linkedin" />
        <img src="icons/icons8-tiktok.svg" alt="tiktok" />
      </SocialIcons>
    </FooterBottom>
  </FooterContainer>
);

export default Footer;