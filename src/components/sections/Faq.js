import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
z-index:2;
`
const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.text};

margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;
color: ${(props) => props.theme.text};
display:flex;
justify-content: space-between;
align-content: center;
`
const Box = styled.div`
width:45%;

`

const Faq = () => {

    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {

        let element = ref.current;

    ScrollTrigger.create({
        trigger: element,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        scrub: true,
    })

    return() => {
        ScrollTrigger.kill();
    };
    }, [])

    return (
        <Section ref={ref} id="faq">
            <Title>FAQ</Title>
            <Container>
                <Box>
                    <Accordion title="Where can i view my NFTS?" >
                    Once minted or bought simply connect to OpenSea and check your profile to view your NFTs.
                    </ Accordion>
                    <Accordion title="Where can i view my NFTS?" >
                    Once minted or bought simply connect to your OpenSea account to view your NFTs.
                    </ Accordion>
                    <Accordion title="Where can i view my NFTS?" >
                    Once minted or bought simply connect to your OpenSea account to view your NFTs.
                    </ Accordion>
                </Box>
                <Box>
                <Accordion title="Where can i view my NFTS?" >
                    Once minted or bought simply connect to your OpenSea account to view your NFTs.
                    </ Accordion>
                    <Accordion title="Where can i view my NFTS?" >
                    Once minted or bought simply connect to your OpenSea account to view your NFTs.
                    </ Accordion>
                    <Accordion title="Where can i view my NFTS?" >
                    Once minted or bought simply connect to your OpenSea account to view your NFTs.
                    </ Accordion>
                </Box>
            </Container>
        </Section>
    )
}

export default Faq;