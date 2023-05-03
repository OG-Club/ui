import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';


const Section = styled.section`
min-height: 40vh;
width: 100%;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
display: relative;
flex-direction: column;
z-index: 3;

@media (max-width: 64em) {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    align-self: center;
  }
`


const Footer = () => {
    return (

        <Section>
            <Banner />
        </Section>
    )
}

export default Footer;