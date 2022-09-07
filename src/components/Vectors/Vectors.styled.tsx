import styled from 'styled-components';

export const StyledVectors = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 50px 0;
`

export const StyledVector = styled.a`
  transition: transform .1s;
  &:hover {
    transform: scale(1.1);
  }
`

export default StyledVectors;