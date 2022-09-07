import React from 'react'
import {StyledParagraph} from './Paragraph.styled'

interface Props {
  children: React.ReactNode;
  alignment?: string;
}

export const Paragraph: React.FC<Props> = ({children, alignment = 'left'}) => {
  return (
    <StyledParagraph $alignment={alignment}>{children}</StyledParagraph>
  )
}

export default Paragraph;
