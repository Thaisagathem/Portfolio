import React from 'react'
import {StyledEmailButton, StyledEmailImage, StyledEmailAnchor} from './EmailButton.styled';
import {Button} from '../../components';
import envelope from'../../assets/envelope.svg';

export const EmailButton: React.FC = () => {

  return (
    <Button >
      <StyledEmailButton>
        <StyledEmailImage>
          <img src={envelope} alt="envelope"/>
        </StyledEmailImage>
        <StyledEmailAnchor href="mailto:thaisagathem@gmail.com">Email me</StyledEmailAnchor>
      </StyledEmailButton>
    </Button>
  )
}
