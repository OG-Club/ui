import React from 'react';
import styled from 'styled-components';
import TypeWriterText from '../TypeWriterText';
import CoverVideo from '../CoverVideo';
import RoundTextBlack from '../../assets/Rounded-Text-Black.png';
import { keyframes } from "styled-components";

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`

const Container = styled.div`
width: 80%;
min-height: 80vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 64em) {
    width: 90%;
}
@media (max-width: 64em) {
flex-direction: column-reverse;
width: 100%;

&>*:first-child{
    width: 100%;
    margin-top: 2rem;
}
}

`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const rotate = keyframes`
100%{
    transform: rotate(1turn);
}
@media (max-width: 48em) {
    display: none;
}

`

const Round = styled.div`
position: absolute;
bottom: 2rem;
right: 90%;
width: 6rem;
height: 6rem;
border: 1px solid ${props => props.theme.text};
border-radius: 50%;
cursor: pointer;
@media (max-width: 48em) {
    display: none;
}

img{
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
    @media (max-width: 48em) {
        display: none;
    }

}

`
const Circle = styled.div`
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color:  ${props => props.theme.text};
color:  ${props => props.theme.body};
font-size:  ${props => props.theme.fontxl};

@media (max-width: 48em) {
    display: none;
}

`

const Home = () => {
    return (
        <Section id="home">
            <Container>
            <Box><TypeWriterText /></Box>
            <Box><CoverVideo /></Box>
            <Round>
                <Circle href="#About">
                    &#x2193;
                </Circle>
                <img src={RoundTextBlack} alt="NFT" />
            </Round>    
            </Container>
        </Section>
    )
}

export default Home;
