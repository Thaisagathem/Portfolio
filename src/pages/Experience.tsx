import React from 'react'
import {ExperienceDetails} from '../components'

export const Experience: React.FC = () => {
  return (
    <>
      <ExperienceDetails 
        title="Mobile Lead"
        company="PensionBee"
        timeframe="APRIL 2022 - PRESENT"
        description="As Mobile Lead, I look after the mobile application as a whole, which translates into a multitude of responsibilities. Some of the more dominant ones include roadmap planning and prioritization in conjunction with the Heads of Software Delivery, Systems and Infrastructure, Information Security and Data as well as Product owners, the optimisation of delivery processes and the reliability of our CI/CD, overall tracking of the health of the platform, coordinating with cross functional delivery teams and overseeing mobile development projects."
      />
      <ExperienceDetails 
        reverse={true}
        title="Tech Lead"
        company="PensionBee"
        timeframe="NOVEMBER  2021 - APRIL 2022"
        description="The role of Tech Lead consisted of facilitating and running sprint ceremonies, acting as a technical escalation point for developers in a multi-disciplinary environment, resolving conflicts between scope, time and quality and working with appropriate stakeholders to resolve team and project issues."
      />
      <ExperienceDetails 
        title="Software Developer"
        company="PensionBee"
        timeframe="OCTOBER  2019 - NOVEMBER 2021"
        description="As a Software Engineer at Pensionbee, my responsibilities were and continue to be to design, build and improve software used by our customers as well as the business internally, in a cross functional delivery team."
      />
    </>
  )
}

export default Experience;
