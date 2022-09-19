import styled from 'styled-components';

export const StyledPortrait = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  padding: 20px;
  @media (max-width:850px) {
    transform: scale(0.75);
  }
`
export const StyledImage = styled.div`
  display: flex;
  height: 25%;
`

export const StyledLine = styled.div`
  display: flex;
  margin-top: -25px;
`
