import React from 'react'
import { StyledExperienceDetails, StyledHeaders, StyledParagraph, StyledSpace } from './ExperienceDetails.styled'
import {Heading, Paragraph} from '../'

interface Props {
  title: string;
  company: string;
  timeframe: string;
  description: string;
  reverse?: boolean;
}

export const ExperienceDetails: React.FC<Props> = ({title, company, timeframe, description, reverse = false}) => {
  return (
    <StyledExperienceDetails $reverse={reverse}>
      <StyledHeaders $reverse={reverse}>
        <Heading variant="h2">{title}</Heading>
        <Heading variant="h3">{company}</Heading>
        <Heading variant="h3">{timeframe}</Heading>
      </StyledHeaders>
      <StyledSpace />
      <StyledParagraph>
        <Paragraph alignment={reverse ? 'right' : 'left'}>{description}</Paragraph>
        <Paragraph alignment={reverse ? 'right' : 'left'}><i>PensionBee combines and transfers your old pensions into a brand new online plan, managed by some of the world&apos;s largest money managers.</i></Paragraph>
      </StyledParagraph>
    </StyledExperienceDetails>
  )
}

