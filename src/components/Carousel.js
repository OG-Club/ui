import React from 'react';
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import "swiper/css/navigation"


import { Pagination, Navigation, Autoplay, EffectCards } from "swiper"

import img1 from '../assets/Nfts/71.png';
import img2 from '../assets/Nfts/148.png';
import img3 from '../assets/Nfts/7950.png';
import img4 from '../assets/Nfts/8006.png';
import img5 from '../assets/Nfts/8286.png';
import img6 from '../assets/Nfts/8450.png';
import img7 from '../assets/Nfts/8508.png';
import img8 from '../assets/Nfts/8593.png';
import img9 from '../assets/Nfts/8727.png';
import img10 from '../assets/Nfts/8853.png';

import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
width: 25vw;
height: 70vh;

.swiper{
    width:100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: cebter;
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
}

.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    width: 4rem;
    top: 60%;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
}
`


const Carousel = () => {
    return (
        <Container>
            <Swiper
            autoplay= {{
                delay:2000,
                disableOnInteraction: false,
            }}
            pagination={{
                type:'fraction',
            }}
            scrollbar={{
                draggable: true
            }}
            navigation={true}
            effect={"cards"}
            grabCoursor={true}
            modules={[ EffectCards, Pagination, Navigation, Autoplay ]}
            className="mySwiper"
            >
                <SwiperSlide> <img src={img1} alt="blockheads"/> </SwiperSlide>
                <SwiperSlide> <img src={img2} alt="blockheads"/> </SwiperSlide>
                <SwiperSlide> <img src={img3} alt="blockheads"/> </SwiperSlide>
                <SwiperSlide> <img src={img4} alt="blockheads"/> </SwiperSlide>
                <SwiperSlide> <img src={img5} alt="blockheads"/> </SwiperSlide>
                <SwiperSlide> <img src={img6} alt="blockheads"/> </SwiperSlide>
                <SwiperSlide> <img src={img7} alt="blockheads"/> </SwiperSlide>
                <SwiperSlide> <img src={img8} alt="blockheads"/> </SwiperSlide>
                <SwiperSlide> <img src={img9} alt="blockheads"/> </SwiperSlide>
                <SwiperSlide> <img src={img10} alt="blockheads"/> </SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Carousel; 