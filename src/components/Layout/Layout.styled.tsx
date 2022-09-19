import styled from "styled-components";

export const StyledLayout = styled.div`
  margin: 60px;
  height: 100vh;
  @media (max-width:850px) {
    margin: 40px;
  }
  @media (max-width:600px) {
    margin: 20px;
  }
`

export const StyledChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
`
