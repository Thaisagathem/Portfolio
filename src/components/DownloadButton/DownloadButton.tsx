import React from 'react'
import {StyledDownloadButton, StyledDownloadImage, StyledDownloadAnchor} from './DownloadButton.styled';
import {Button} from '../../components';
import download from'../../assets/download.svg';

export const DownloadButton: React.FC = () => {
  return (
    <Button>
      <StyledDownloadButton>
        <StyledDownloadImage>
          <img src={download} alt="download"/>
        </StyledDownloadImage>
      <StyledDownloadAnchor href="/resume.pdf" download="ThaisMarieCV.pdf">Download CV</StyledDownloadAnchor>
      </StyledDownloadButton>
    </Button>
  )
}
