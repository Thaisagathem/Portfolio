import React from 'react';
import {Link} from 'react-router-dom';
import {StyledNavbar, StyledUnorderedListItems, StyledListItem, StyledText, StyledIcon} from './Navbar.styled';
import {Button} from '../'
import userIcon from '../../assets/user.svg'

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
        <Button><Link to="/contact" style={{textDecoration: "none", margin: 0}}><StyledIcon enabled={currentPage === '/contact' ? true : false} src={userIcon} alt="userIcon" /></Link></Button>
      </StyledNavbar>
    </>
  )
}

export default Navbar;
