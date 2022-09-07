import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
`

export const StyledUnorderedListItems = styled.ul`
  list-style: none;
  display: flex;
  flex: 1;
  padding-inline-start: 0px;
`

export const StyledListItem = styled.li`
  padding: 0 25px 0 0;
`

export const StyledText = styled.p<{ enabled: boolean }>`
  transition: font-size 0.5s;
  &:hover {
    font-size: 1.1em;
  }
  font-family: Poppins;
  color: #FFFFFF;
  font-weight: ${props => props.enabled ? 600 : 100}
`