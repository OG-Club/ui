import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import DrawSvg from '../DrawSvg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`
const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;
`
const Container = styled.div`
width: 70%;
height: 200vh;
background-color: ${(props) => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
position: relative;
`
const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Items= styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&>*:nth-of-type(2n +1){
    justify-content: start;

    div{
        border-radius: 50px 0 50px 0;
        text-align: right;
    }
    p{
        border-radius: 40px 0 40px 0;
    }
}
&>*:nth-of-type(2n +2){
    justify-content: end;
    div{
        border-radius:0 50px 0 50px;
        text-align: left;
    }
    p{
        border-radius:0 40px 0 40px;
    }
}
}
`
const Item = styled.li`
width: 100%;
height: 100%;
display: flex;
`
const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${(props) => props.theme.text};
`
const Box = styled.p`
height: fit-content;
background-color: ${(props) => props.theme.carouselColor};
color: ${(props) => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${(props) => props.theme.text};
`

const SubTitle = styled.span`
display: block;
font-size: ${(props) => props.theme.fontxl};
text-transform: capitalize;
color: ${(props) => props.theme.text};
`

const Text = styled.span`
display: block;
font-size: ${(props) => props.theme.fontsm};
text-transform: capitalize;
color: ${(props) => props.theme.text};
font-weight: 400;
margin: 0.5rem 0;
`

const RoadMapItem = ({ title, subtext, addToRef}) => {

    return(
        <Item ref={addToRef}>
            <ItemContainer>
                <Box>
                    <SubTitle>{title}</SubTitle>
                        <Text>{subtext}</Text>
                </Box>
            </ItemContainer>
        </Item>
    )
}

const Roadmap = () => {

const revealRefs = useRef([]);
revealRefs.current = [];
gsap.registerPlugin(ScrollTrigger);

const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
}

useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach( (el, index) => {

        t1.fromTo(
            el.childNodes[0],
            {
                y:'0'
            },{
                y:'-30%',

                scrollTrigger:{
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: 'top center+=200px',
                    end:'bottom center',
                    scrub: 'true',
                    
                }
            }
        )

    })

    return() => {

    };
}, [])


    return (
        <Section id="roadmap">
            <Title>Roadmap</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <Item>&nbsp;</Item>
                    <RoadMapItem addToRef={addToRefs} title="Grand Opening" subtext="We f*cked up and made original art instead of another derivative. We should have just made another copy of boring yacht apes club :)  -mint" />
                    <RoadMapItem addToRef={addToRefs} title="Early Access" subtext="Sh*t, how are we gonna get the clients? Should we offer a free gun, or a grenade with every minted jpeg? -allow list" />
                    <RoadMapItem addToRef={addToRefs} title="New Merch Store" subtext="Awesome, things are looking good boss, we can finally start selling the good stuff. -merch store opens " />
                    <RoadMapItem addToRef={addToRefs} title="Partnerships Revealed" subtext="It's time to partner with the local gang, and join the forces, to take over the market. -partnership announcement" />
                    <RoadMapItem addToRef={addToRefs} title="Great Benefits" subtext="Great success!!! Everything is up and running, it's time to put the money where our mouth is! Start paying the gang for their loyalty and hard work. -staking, lottery & mystery boxes" />
                </Items>
            </Container>
        </Section>
    )
}

export default Roadmap;