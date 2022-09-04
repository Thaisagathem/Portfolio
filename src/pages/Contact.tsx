import React from 'react'
import {Heading, Paragraph, Portrait, ContactLogos} from '../components'

export const Contact: React.FC = () => {
  return (
    <>
      <Portrait />
      <Heading alignment='center'>Thaïs Marie</Heading>
      <Paragraph alignment='center'>+44 (0) 7771 452 807<br />thaisagathem@gmail.com</Paragraph>
      <ContactLogos />
    </>
  )
  }

  export default Contact;
