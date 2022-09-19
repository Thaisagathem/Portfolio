import styled from "styled-components";

export const StyledExperienceDetails = styled.div<{ $reverse: boolean }>`
  @media (max-width:850px) {
    display: flex;
    flex-direction: column;
    padding: 40px 0px;
  }
  display: flex;
  padding: 100px 25px;
  flex-direction: ${$props => $props.$reverse === true ? "row-reverse" : "row"}
`

export const StyledHeaders = styled.div<{ $reverse: boolean }>`
  @media (max-width:850px) {
    width: 100%;
    align-items: ${$props => $props.$reverse === true ? "flex-end" : "flex-start"};
    margin: 0 0 30px 0;
  }
  display: flex;
  flex-direction: column;
  align-items: ${$props => $props.$reverse === true ? "flex-start" : "flex-end"};
  width: 49%;
`

export const StyledParagraph = styled.div`
  @media (max-width:850px) {
    width: 100%;
  }
  width: 49%;
`

export const StyledSpace = styled.div`
  width: 2%;
`

