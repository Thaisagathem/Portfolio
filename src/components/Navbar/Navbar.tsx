import React, { useState } from 'react'
import {StyledNavbar, StyledUnorderedListItems, StyledListItem, StyledAnchor} from './Navbar.styled';
import {Button} from '../'

export const Navbar: React.FC = () => {
// state for navbar current page
  return (
    <>
      <StyledNavbar>
        <StyledUnorderedListItems>
          {/* change from a to Link */}
            <StyledListItem><StyledAnchor href="/">Home</StyledAnchor></StyledListItem>
            <StyledListItem><StyledAnchor href="/about">About</StyledAnchor></StyledListItem>
            <StyledListItem><StyledAnchor href="/experience">Experience</StyledAnchor></StyledListItem>
        </StyledUnorderedListItems>
        <Button><StyledAnchor href="/contact">Contact</StyledAnchor></Button>
      </StyledNavbar>
    </>
  )
}

export default Navbar;
