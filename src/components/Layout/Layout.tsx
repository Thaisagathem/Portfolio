import React, { useState } from 'react'
import {Navbar} from '../'
import {StyledLayout, StyledChildren} from './Layout.styled'

interface Props {
  children: React.ReactNode;
  currentPage: string;
}

export const Layout: React.FC<Props> = ({children, currentPage}) => {

  return (
    <StyledLayout>
      <Navbar currentPage={currentPage}/>
      <StyledChildren>
        {children}
      </StyledChildren>
    </StyledLayout>
  );
}

export default Layout;