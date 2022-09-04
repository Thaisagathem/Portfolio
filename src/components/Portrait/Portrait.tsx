import React from 'react'
import thaisPortrait from'../../assets/thaisPortrait.svg';
import drawnLine from'../../assets/drawnLine.png';
import {StyledPortrait, StyledImage, StyledLine} from './Portrait.styled';

export const Portrait: React.FC = () => {
  return (
    <StyledPortrait>
      <StyledImage><img src={thaisPortrait} alt="thaisPortrait"/></StyledImage>
      <StyledLine><img src={drawnLine} alt="drawnLine"/></StyledLine>
    </StyledPortrait>
  )
}
