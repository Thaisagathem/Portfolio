import styled from 'styled-components';

export const StyledParagraph = styled.p<{ $alignment: string }>`
  font-size: 22px;
  text-align: ${$props => $props.$alignment};
  font-family: 'Poppins';
  font-weight: 100;
  margin: 0 0 40px 0;
`

export default StyledParagraph;