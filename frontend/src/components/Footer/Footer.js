import React from 'react';
import {
  FooterContainer,
  FooterSection,
  Column,
  Logo,
  FooterText,
  FooterTitle,
  SocialIcons,
  FooterBottom,
  Divider,
} from './Footer.styles';

const Footer = () => (
  <FooterContainer>
    <FooterSection>
      <Column spacing={2} alignStart flexGrow>
        <Logo src="icons/logo-with-text.svg" alt="CourtCorrect logo" />
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
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="icons/icons8-facebook.svg" alt="Facebook" height="24px" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <img src="icons/icons8-twitter.svg" alt="Twitter" height="24px" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="icons/icons8-instagram.svg" alt="Instagram" height="24px" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <img src="icons/icons8-youtube.svg" alt="YouTube" height="24px" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="icons/icons8-linkedin.svg" alt="LinkedIn" height="24px" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <img src="icons/icons8-tiktok.svg" alt="TikTok" height="24px" />
        </a>
      </SocialIcons>
    </FooterBottom>
  </FooterContainer>
);

export default Footer;