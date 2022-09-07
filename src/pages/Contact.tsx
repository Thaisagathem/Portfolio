import React from 'react'
import {Heading, Paragraph, Portrait, ContactLogos} from '../components'

export const Contact: React.FC = () => {
  return (
    <>
      <Portrait />
      <Heading alignment='center'>Thaïs Marie</Heading>
      <Paragraph alignment='center'>
        <a href="tel:07771452807" style={{textDecoration: "none", color: "inherit"}}>+44 (0) 7771 452 807</a><br />
        <a href="mailto:thaisagathem@gmail.com" style={{textDecoration: "none", color: "inherit"}}>thaisagathem@gmail.com</a>
      </Paragraph>
      <ContactLogos />
    </>
  )
  }

  export default Contact;
