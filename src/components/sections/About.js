import React from 'react';
import styled from 'styled-components';
import Carousel from '../Carousel';
import {dark} from '../../styles/Themes';
import { ThemeProvider } from 'styled-components';


const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};

display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 80%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.body};
align-self: flex-start;
margin: 0 auto;
`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
width: 80%;
color: ${props => props.theme.body};
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;
`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
text-transform: capitalize;
width: 80%;
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
margin: 0 auto;
`
const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
margin: 2rem auto;


a{
    display: inline-block;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    outline: none;
    border: none;
    font-size: ${props => props.theme.fontmd};
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    margin: 0 0.5rem;
    &:hover{
        transform: scale(0.9);
    }
    
    &::after{
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${props => props.theme.body};
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }
    &:hover::after{
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
    
    `





const About = () => {
    return (
        <Section id="about">
            <Container>
                <Box> <Carousel /> </Box>
                <Box>
                    <Title>
                        Welcome to the Blockheads OG Club.
                    </Title>
                    <SubText>
                        Blockheads OG CLub is a collection of 8888 unique NFT collectibles. BOGC are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
                    </SubText>
                    <SubTextLight>
                        With more than 250+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
                    </SubTextLight>
                    <ButtonContainer>
                    <ThemeProvider theme={dark}>
                    <a href="https://twitter.com/nft_og_club" rel="_blank">Twitter</a>
                    <a href="https://www.instagram.com/og_club_nft/">Instagram</a>
                    <a href="https://discord.com">Discord</a>
                    </ThemeProvider>
                    </ButtonContainer>
                </Box>
            </Container>
        </Section>
    )
}

export default About;