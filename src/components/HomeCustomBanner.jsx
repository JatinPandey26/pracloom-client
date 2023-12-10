import React from 'react';
import bannerImage from '../assets/images/students.jpeg'


const bannerProps = {
    title: "Get ready to learn and grow your skills",
    description: "Get ready to learn and grow your skills . Get ready to learn and grow your skills",
    image: bannerImage,
    imagePosition: "right",
    bgColor: "#c6def1"
}

const HomeCustomBanner = () => {
    return (
        <div className={'home-custom-banner'} style={{backgroundColor: bannerProps.bgColor}}>
            <div className={'content'}>
                <h3>{bannerProps.title}</h3>
                <p>{bannerProps.description}</p>
            </div>
            <div className={'image-holder'}>
                <img src={bannerProps.image} alt="banner"/>
            </div>
        </div>
    );
};

export default HomeCustomBanner;