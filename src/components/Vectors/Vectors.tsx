import React from 'react'
import {StyledVectors, StyledVector} from './Vectors.styled';
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
      <StyledVector href="https://reactnative.dev/" target="_blank"><img src={reactNativeLogo} alt="reactNativeLogo"/></StyledVector>
      <StyledVector href="https://nodejs.org/en/" target="_blank"><img src={nodeLogo} alt="nodeLogo"/></StyledVector>
      <StyledVector href="https://www.javascript.com/" target="_blank"><img src={javascriptLogo} alt="javascriptLogo"/></StyledVector>
      <StyledVector href="https://redux.js.org/" target="_blank"><img src={reduxLogo} alt="reduxLogo"/></StyledVector>
      <StyledVector href="https://sass-lang.com/" target="_blank"><img src={scssLogo} alt="scssLogo"/></StyledVector>
      <StyledVector href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm" target="_blank"><img src={salesforceLogo} alt="salesforceLogo"/></StyledVector>
      <StyledVector href="https://reactjs.org/" target="_blank"><img src={reactLogo} alt="reactLogo"/></StyledVector>
      <StyledVector href="https://www.typescriptlang.org/" target="_blank"><img src={typescriptLogo} alt="typescriptLogo"/></StyledVector>
    </StyledVectors>
  )
}

export default Vectors;
