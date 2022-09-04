import styled from 'styled-components';

export const StyledHeading = styled.h1<{ $variant: string, $alignment: string }>`
  margin: 0;
  font-family: Stardos Stencil;
  text-align: ${$props => $props.$alignment};
  ${($props) => {
    switch ($props.$variant) {
      case "h1":
        return `
          font-size: 84px;
        `;
      case "h2":
        return `
          font-size: 48px;
        `;
      case "h3":
        return `
          font-size: 36px;
          font-family: Poppins;
          font-weight: 100;
        `;
      default:
        break;
    }
  }};
`

export default StyledHeading;
