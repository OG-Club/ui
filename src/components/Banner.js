import React from 'react';
import styled from'styled-components';

import img5 from '../assets/Nfts/8628.png';
import img6 from '../assets/Nfts/8450.png';
import img7 from '../assets/Nfts/8508.png';
import img8 from '../assets/Nfts/8593.png';
import img9 from '../assets/Nfts/8727.png';
import img10 from '../assets/Nfts/8853.png';


const Section = styled.section`
width: 100%;
height: 25rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};
border-top: 2px solid ${props => props.theme.text};

background-color: ${props => `Rgba(${props.theme.textRgba},0.9)`};
display:flex;
justify-content: center;
align-items: center;

overflow: hidden;
z-index: 3;
`

const ImgContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

img{
    height: 30vh;
    width: 30vh;
}
`


const Banner = () => {
    return (
        <Section>
            <ImgContainer>
                <img src={img10} alt="Blockheads" />
                <img src={img9} alt="Blockheads" />
                <img src={img8} alt="Blockheads" />
                <img src={img7} alt="Blockheads" />
                <img src={img6} alt="Blockheads" />
                <img src={img5} alt="Blockheads" />
            </ImgContainer>
        </Section>
    )
}

export default Banner;