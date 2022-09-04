import React, { useState } from 'react'
import {Navbar} from '../'
import {StyledLayout, StyledChildren} from './Layout.styled'

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({children}) => {

  return (
    <StyledLayout>
      <Navbar />
      <StyledChildren>
        {children}
      </StyledChildren>
    </StyledLayout>
  );
}

export default Layout;