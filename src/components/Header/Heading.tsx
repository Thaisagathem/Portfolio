import React from 'react'
import StyledHeading from './Heading.styled'

interface Props {
  children: string;
  variant?: string;
  alignment?: string;
}

export const Heading: React.FC<Props> = ({children, variant = 'h1', alignment = 'left'}) => {
  return (<StyledHeading $variant={variant} $alignment={alignment}>{children}</StyledHeading>)
}

export default Heading;