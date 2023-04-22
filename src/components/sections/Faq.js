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

a{
    color: green;
}

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
                    <Accordion title="Where can I view my NFTS?" >
                    Once minted or bought simply connect to <a href="https://opensea.io">OpenSea</a> and check your profile to view your NFTs.
                    </ Accordion>
                    <Accordion title="Why Blockheads?" >
                    The name has different meanings. Block(chain)heads, but also because their heads are made out of geometric blocks, as well as a blockhead by <a href="https://www.merriam-webster.com/dictionary/blockhead">definition</a>: noun INFORMAL a stupid person.
                    </ Accordion>
                    <Accordion title="Which blockchain and what is the mint cost?" >
                    Blockheads are ERC-721 NFTs terrorising the world of Ethereum. You can join the OG gang for 0.007 ETH.
                    </ Accordion>
                </Box>
                <Box>
                <Accordion title="What are the benefits of holding a blockhead?" >
                    This collection comes with great benefits package. To start, it allows users to earn a passive income by staking your NFT, it grants a discount for a Blockheads clothes collection, once merch store is live. As well as each NFT holder will be gifted a mystery box. There is also a Most Wanted lottery, where you can instantly win up to 1ETH prize!
                    </ Accordion>
                    <Accordion title="What rewards can I expect from a mystery box?" >
                    Mystery boxes will be packed with Ethereum prizes, other ERC-20 tokens and NFTs. *only valid upon 100% mint completion.
                    </ Accordion>
                    <Accordion title="These guys are wearing a pretty cool clothes, can I purchase any?" >
                    Once the mint is complete, you will be able to purchase most of the designs form the merchandise store. Including: hoodies, T-s, jackets, belts, baseball caps and other accessories. Apart from guns, swords and grenades. See your local black market dealer for those. Stay tuned for more details!
                    </ Accordion>
                </Box>
            </Container>
        </Section>
    )
}

export default Faq;