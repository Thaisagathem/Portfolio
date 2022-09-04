import React from 'react'
import {StyledVectors} from './Vectors.styled';
import reactNativeLogo from'../../assets/reactNativeLogo.png';
import nodeLogo from'../../assets/nodeLogo.png';
import javascriptLogo from'../../assets/javascriptLogo.png';
import reduxLogo from'../../assets/reduxLogo.png';
import scssLogo from'../../assets/scssLogo.png';
import salesforceLogo from'../../assets/salesforceLogo.png';
import reactLogo from'../../assets/reactLogo.png';
import typescriptLogo from'../../assets/typescriptLogo.png';

export const Vectors: React.FC = () => {
  return (
    <StyledVectors>
      <img src={reactNativeLogo} alt="reactNativeLogo"/>
      <img src={nodeLogo} alt="nodeLogo"/>
      <img src={javascriptLogo} alt="javascriptLogo"/>
      <img src={reduxLogo} alt="reduxLogo"/>
      <img src={scssLogo} alt="reactNativeLogo"/>
      <img src={salesforceLogo} alt="salesforceLogo"/>
      <img src={reactLogo} alt="reactLogo"/>
      <img src={typescriptLogo} alt="typescriptLogo"/>
    </StyledVectors>
  )
}

export default Vectors;
