import React from 'react';
import GIF from '../assets/Home Video.mov'
import styled from 'styled-components'

const VideoContainer = styled.div`
width: 100%;

video{
    width: 100%;
    height: auto
    border: 1px solid ${props => props.theme.text};
    border-radius: 30%;
}
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <video src={GIF} type="video/mov" autoPlay muted loop/>
        </VideoContainer>
    )
}

export default CoverVideo;