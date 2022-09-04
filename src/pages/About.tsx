import React from 'react'
import {Heading, Paragraph, Vectors} from '../components'

export const About: React.FC = () => {
  return (
    <>
      <Heading>Thaïs Marie</Heading>
      <Paragraph alignment="left">I&apos;m a <b>frontend software engineer</b> specializing in<br /> Mobile Development with good project<br /> management abilities.</Paragraph>
      <Paragraph alignment="right">Experienced with all stages of the development cycle from roadmap<br /> planning and prioritization over refinement, development and QA to CI/CD and release.<br /> Well versed in numerous other tools and technologies including React, Salesforce Apex, Node, Postgresql, Bitrise and more.<br /><br /></Paragraph>
      <Paragraph alignment="center">I am fluent in English, French and German, Advanced in Spanish and Intermediate High in Portuguese.<br /> I transitioned into software engineering from a music career and am therefore also quite<br /> proficient and passionate with intruments and music composition.</Paragraph>
      <Vectors />
    </>
  )
}

export default About;