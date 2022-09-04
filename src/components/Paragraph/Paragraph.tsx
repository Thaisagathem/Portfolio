import React from 'react'
import {StyledParagraph} from './Paragraph.styled'

interface Props {
  children: React.ReactNode;
  variant?: string;
  alignment?: string;
}

// TODO VARIANTS
export const Paragraph: React.FC<Props> = ({children, variant = 'h1', alignment = 'left'}) => {
  return (
    <StyledParagraph $alignment={alignment}>{children}</StyledParagraph>
  )
}

export default Paragraph;
