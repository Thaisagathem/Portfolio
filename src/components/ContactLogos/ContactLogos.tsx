import React from 'react';
import { StyledContactLogos, StyledLogo } from './ContactLogos.styled';
import gitHubLogo from'../../assets/gitHubLogo.png';
import linkedinLogo from'../../assets/linkedinLogo.png';
import twitterLogo from'../../assets/twitterLogo.png';

export const ContactLogos: React.FC = () => {
  return (
    <StyledContactLogos>
      <StyledLogo><img src={gitHubLogo} alt="gitHubLogo"/></StyledLogo>
      <StyledLogo><img src={linkedinLogo} alt="linkedinLogo"/></StyledLogo>
      <StyledLogo><img src={twitterLogo} alt="twitterLogo"/></StyledLogo>
    </StyledContactLogos>
  )
}
