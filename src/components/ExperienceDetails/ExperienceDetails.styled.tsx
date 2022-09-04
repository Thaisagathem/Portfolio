import styled from "styled-components";

export const StyledExperienceDetails = styled.div<{ $reverse: boolean }>`
  display: flex;
  padding: 100px 25px;
  flex-direction: ${$props => $props.$reverse === true ? "row-reverse" : "row"}
`

export const StyledHeaders = styled.div<{ $reverse: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${$props => $props.$reverse === true ? "flex-start" : "flex-end"};
  width: 49%;
`

export const StyledParagraph = styled.div`
  width: 49%;
`

export const StyledSpace = styled.div`
  width: 2%;
`

