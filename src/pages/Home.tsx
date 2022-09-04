import React from 'react'
import {Heading, Paragraph, Button} from '../components'
import envelope from'../assets/envelope.svg';
import download from'../assets/download.svg';

export const Home: React.FC = () => {
  return (
    <>
      <Heading>Thaïs Marie</Heading>
      <Paragraph>I&apos;m a <b>frontend software engineer</b> specializing in<br /> Mobile Development with good project<br /> management abilities.</Paragraph>
      <div>
        <Button><img src={envelope} alt="envelope" style={{ height: "10px", padding: "6px 5px 0 0"}}/>Email me</Button>
        <Button><img src={download} alt="download" style={{ height: "16px", padding: "0 5px 0 0"}}/>Download CV</Button>
      </div>
    </>
  )
}

export default Home;
