import styled from 'styled-components';

export const StyledButton = styled.button`
  &:hover {
    opacity: 100%;
  }
  color: #ffffff;
  background-color: #314F7C;
  padding: 15px 40px;
  border: none;
  border-radius: 10px;
  opacity: 60%;
  margin: 5px;
  @media (max-width:850px) {
    padding: 15px 20px;
    height: 50px;
  }
  @media (max-width:600px) {
    padding: 10px 15px;
    height: 50px;
  }
`

export default StyledButton;