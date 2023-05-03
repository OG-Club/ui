import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
    text-transform: uppercase;
    font-family:'Akaya Telivigala', cursive;
}
.text-1{
    color:blue;
}
.text-2{
    color:red;
}
.text-3{
    color:orange;
}
.text-4{
    color:green;
}
@media (max-width: 70em) {
    font-size: ${props => props.theme.fontxxl};
}
@media (max-width: 64em) {
    font-size: ${props => props.theme.fontxl};
    align-self: center;
    text-align: center;
}
@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}

`;
const SubTitle= styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 64em) {
    font-size: ${props => props.theme.fontxl};
    align-self: center;
    text-align: center;
}

@media (max-width: 48em) {
    font-size: ${props => props.theme.fontmd};
    align-self: center;
    text-align: center;
}

`

const ButtonContainer = styled.div`
align-self: flex-start;

@media (max-width: 64em) {
    align-self:center;
    text-align: center;
}

a{
    display: inline-block;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    outline: none;
    border: none;
    font-size: ${props => props.theme.fontmd};
    padding: 1rem 1.5rem;
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
        border: 2px solid ${props => props.theme.text};
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


const TypeWriterText = () => {
    const scrollTo = (id) => {

        let element = document.getElementById(id);

        element.scrollIntoView ({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        }) 
        
    }
    return (
<>
        <Title>
            Discover a new era of cool
            <Typewriter
            options={{
                autostart:true,
                loop: true,
            }}
  onInit={(typewriter) => {
    typewriter
    .typeString('<span class="text-1">NFTs.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-2">Collectibles.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-3">PFPs.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-4">OG Hooligans.</span>')
    .pauseFor(2000)
    .start()

  }}
/>
</Title>
<SubTitle>Bored Of Derivatives? Try Something New.</SubTitle>
<ButtonContainer>
<a onClick={() => scrollTo('wanted')}>Mint & Win 1ETH</a>
</ButtonContainer>
</>
    );
};

export default TypeWriterText;