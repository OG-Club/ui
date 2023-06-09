import React, {useState} from 'react';
import styled from 'styled-components'
import Logo from './Logo';

const Section = styled.section`
width: 100vw;
background-color: ${props =>props.theme.body};
`
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;   
    
    z-index: 25;
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);

    transform: ${props => props.click ? 'translateY(0)' : 'translateY(100%)'};

    flex-direction: column;
    justify-content: center;
}


`
const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text}; 
cursor: pointer;

&::after{
    content: ''; 
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition : width 0.3s ease;
}

&:hover::after{
width: 100%;
}

@media (max-width: 64em){
    margin: 1rem 0;

    &::after{
        display: none;
    }
}
`
const ButtonSection = styled.div`
a{
    display: inline-block;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    outline: none;
    border: none;
    font-size: ${props => props.theme.fontmd};
    padding: 0.9rem 1.5rem;
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
    @media (max-width: 64em) {
        scale: 0.7;
        right: -30%; 
        padding: 1.5rem;   
        justify-content: center;  
    }
`
const HamburgerMenu = styled.span`
width: ${props => props.click ? '2rem' : '1.5rem' };
height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0deg)'  };

display: none;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 0.3s ease;
z-index:60;
@media (max-width: 1024px) {
    display: flex;
}

&::after, &::before{
    content: ' ';
    width: ${props => props.click ? '1rem' : '1.5rem' };
    height: 2px;
    right: ${props => props.click ? '-2px' : '0' };
    background: ${props => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
}

&::after{
    top: ${props => props.click ? '0.3rem' : '0.5rem' };
    transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0deg)'  };

}
&::before{
    bottom: ${props => props.click ? '0.3rem' : '0.5rem' };
    transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0deg)'  };
}
`


const Navigation = () => {

    const [click, setClick] = useState(false);

    const scrollTo = (id) => {

        let element = document.getElementById(id);

        element.scrollIntoView ({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        }) 

        setClick(!click);
        
    }
    return (
        <Section>
            <NavBar>
                <Logo />
                <HamburgerMenu click={click} onClick= {() => setClick(!click)}>
                   &nbsp;
                </HamburgerMenu>
                <Menu click={click}>
                    <MenuItem onClick={() => scrollTo('home')} >Home</MenuItem>
                    <MenuItem onClick={() => scrollTo('about')} >About</MenuItem>
                    <MenuItem onClick={() => scrollTo('roadmap')} >Roadmap</MenuItem>
                    <MenuItem onClick={() => scrollTo('wanted')} >Most Wanted</MenuItem>
                    <MenuItem onClick={() => scrollTo('faq')} >FAQ</MenuItem>
                </Menu>
                <ButtonSection>
                <a href="https://opensea.io" target="blank">Mint On OpenSea</a>
                </ButtonSection>
            </NavBar>
        </Section>
    )
    
}

export default Navigation;