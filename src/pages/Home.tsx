import React from 'react'
import {Heading, Paragraph, DownloadButton, EmailButton} from '../components'

export const Home: React.FC = () => {
  return (
    <>
      <Heading>Thaïs Marie</Heading>
      <Paragraph>I&apos;m a <b>frontend software engineer</b> specializing in<br /> Mobile Development with great project<br /> management abilities.</Paragraph>
      <div>
        <EmailButton />
        <DownloadButton />
      </div>
    </>
  )
}

export default Home;
