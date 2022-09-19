import styled from 'styled-components';

export const StyledVectors = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 50px 0;
  resize: horizontal;
  overflow: auto;
  @media (max-width:850px) {
    flex-direction: column;
    align-items: center;
  }
`

export const StyledVector = styled.a`
  transition: transform .1s;
  resize: both;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width:850px) {
    margin: 0 0 50px 0;
  }
`

export default StyledVectors;