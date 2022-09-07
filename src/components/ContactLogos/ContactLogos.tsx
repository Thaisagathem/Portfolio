import React from 'react';
import { StyledContactLogos, StyledLogo } from './ContactLogos.styled';
import gitHubLogo from'../../assets/gitHubLogo.png';
import linkedinLogo from'../../assets/linkedinLogo.png';
import twitterLogo from'../../assets/twitterLogo.png';

export const ContactLogos: React.FC = () => {
  return (
    <StyledContactLogos>
      <StyledLogo><a href="https://github.com/Thaisagathem" target="_blank"><img src={gitHubLogo} alt="gitHubLogo"/></a></StyledLogo>
      <StyledLogo><a href="https://www.linkedin.com/in/tha%C3%AFs-marie-83b048177/" target="_blank"><img src={linkedinLogo} alt="linkedinLogo"/></a></StyledLogo>
      <StyledLogo><a href="https://twitter.com/Thaisagmarie" target="_blank"><img src={twitterLogo} alt="twitterLogo"/></a></StyledLogo>
    </StyledContactLogos>
  )
}
