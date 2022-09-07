import React from 'react';
import {Link} from 'react-router-dom';
import {StyledNavbar, StyledUnorderedListItems, StyledListItem, StyledText} from './Navbar.styled';
import {Button} from '../'

interface Props {
  currentPage: string;
}

export const Navbar: React.FC<Props> = ({currentPage}) => {
  return (
    <>
      <StyledNavbar>
        <StyledUnorderedListItems>
            <StyledListItem><Link to="/" style={{textDecoration: "none"}}><StyledText enabled={currentPage === '/' ? true : false}>Home</StyledText></Link></StyledListItem>
            <StyledListItem><Link to="/about" style={{textDecoration: "none"}}><StyledText enabled={currentPage === '/about' ? true : false}>About</StyledText></Link></StyledListItem>
            <StyledListItem><Link to="/experience" style={{textDecoration: "none"}}><StyledText enabled={currentPage === '/experience' ? true : false}>Experience</StyledText></Link></StyledListItem>
        </StyledUnorderedListItems>
        <Button><Link to="/contact" style={{textDecoration: "none"}}><StyledText enabled={currentPage === '/contact' ? true : false}>Contact</StyledText></Link></Button>
      </StyledNavbar>
    </>
  )
}

export default Navbar;
