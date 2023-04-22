import React from 'react';
import styled from 'styled-components';
import ConfettiComponent from '../Confetti'

import img1 from '../../assets/Nfts/71.png';
import img2 from '../../assets/Nfts/148.png';
import img3 from '../../assets/Nfts/5770.png';
import img4 from '../../assets/Nfts/4059.png';
import img5 from '../../assets/Nfts/8286.png';
import img6 from '../../assets/Nfts/8450.png';
import img7 from '../../assets/Nfts/8508.png';
import img8 from '../../assets/Nfts/8593.png';
import img9 from '../../assets/Nfts/8727.png';
import img10 from '../../assets/Nfts/8853.png';

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
position: relative;
padding-bottom: 0.5rem;
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
padding-top: 0.6rem;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`
const EmptyItem = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
margin: 2rem 1rem;
position: relative;
`
const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${(props) => props.theme.text};
margin: 2rem 1rem;
position: relative;
background-color: ${(props) => props.theme.carouselColor};
border: 2px solid ${(props) => props.theme.text};
border-radius: 20px;
z-index:5;

&:hover{
    img{
        transform: translateY(-1rem) scale(1.1);
    }
}
`
 
const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
padding: 0.8rem;
border-radius: 20px;
cursor: pointer;

img{
    width: 100%;
    height: auto;
    border-radius: 20px;
    transition: all 0.2s ease;
    border: 1px solid ${(props) => props.theme.text};
    filter: blur(8px);
}
`
const Name = styled.h2`
font-size: ${(props) => props.theme.fontxlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;  
color: ${(props) => props.theme.text}
margin-top: 1rem;
`
const ID = styled.h2`
font-size: ${(props) => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;  
color: ${(props) => props.theme.text}
margin-top: 1rem;
`
const Position = styled.h2`
font-size: ${(props) => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;  
color: ${(props) => `Rgba(${props.theme.textRgba},0.9) `};
font-weight: 400;
`

const MemberComponent = ({img, name="", id="", position=""}) => {

    return(
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <ID>{id}</ID>
            <Position>{position}</Position>
        </Item>
    )
}

const Team = () => {
    return (
        <Section id="wanted">
            <ConfettiComponent />
            <Title>Most Wanted</Title>
            <Container>
                <EmptyItem>&nbsp;</EmptyItem>
                <MemberComponent img={img1} name="The Boss" id="BOGC #****" position="Prize: 1 ETH"/>
                <MemberComponent img={img2} name="Underboss" id="BOGC #****" position="Prize: 0.5 ETH"/>
                <EmptyItem>&nbsp;</EmptyItem>
                <MemberComponent img={img3} name="Captain" id="BOGC #****" position="Prize: 0.4 ETH"/>
                <MemberComponent img={img4} name="Pet Shop Boy" id="BOGC #****" position="Prize: 0.3 ETH"/>
                <MemberComponent img={img5} name="Violent Tony" id="BOGC #****" position="Prize: 0.3 ETH"/>
                <MemberComponent img={img6} name="The Chemist" id="BOGC #****" position="Prize: 0.1 ETH"/>
                <MemberComponent img={img7} name="SK8" id="BOGC #****" position="Prize: 0.1 ETH"/>
                <MemberComponent img={img8} name="Bully" id="BOGC #****" position="Prize: 0.1 ETH"/>
                <MemberComponent img={img9} name="Assasin" id="BOGC #****" position="Prize: 0.1 ETH"/>
                <MemberComponent img={img10} name="Punk" id="BOGC #****" position="Prize: 0.1 ETH" />


            </Container>
        </Section>
    )
}

export default Team;