import styled from 'styled-components';

export const StyledParagraph = styled.p<{ $alignment: string }>`
  font-size: 24px;
  text-align: ${$props => $props.$alignment};
  font-family: 'Poppins';
  font-weight: 100;
  margin: 0 0 40px 0;
  @media (max-width:850px) {
    font-size: 22px;
    margin: 0 0 20px 0;
  }
`

export default StyledParagraph;