// eslint-disable-next-line no-unused-vars
import React from 'react';
import featurePic from '../assets/images/unicorn.png'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Thumbs, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const features = [
    {
        title: "Platform",
        description: "Create your own platform with ease and start selling your courses",
        image: featurePic,
        bgColor: "#c6def1"
    },
    {
        title: "Platform",
        description: "Create your own platform with ease and start selling your courses",
        image: featurePic,
        bgColor: "#dbcdf0"
    },
    {
        title: "Platform",
        description: "Create your own platform with ease and start selling your courses",
        image: featurePic,
        bgColor: "#c6def1"
    },
    {
        title: "Platform",
        description: "Create your own platform with ease and start selling your courses",
        image: featurePic,
        bgColor: "#dbcdf0"
    },
    {
        title: "Platform",
        description: "Create your own platform with ease and start selling your courses",
        image: featurePic,
        bgColor: "#c6def1"
    },
    {
        title: "Platform",
        description: "Create your own platform with ease and start selling your courses",
        image: featurePic,
        bgColor: "#dbcdf0"
    },
    {
        title: "Platform",
        description: "Create your own platform with ease and start selling your courses",
        image: featurePic,
        bgColor: "#c6def1"
    },
    {
        title: "Platform",
        description: "Create your own platform with ease and start selling your courses",
        image: featurePic,
        bgColor: "#dbcdf0"
    },
]


const HomeFeatures = () => {
    return (
        <div className={"home-page-features"}>
            <h2>Features</h2>
            <div>
                <Swiper
                    modules={[Thumbs, Autoplay]}
                    spaceBetween={4}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}

                    watchSlidesProgress
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                >
                    {features.map((feature, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <SwiperSlide>
                            <FeatureCard key={index} title={feature.title} description={feature.description}
                                         image={feature.image} bgColor={feature.bgColor}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const FeatureCard = ({title, description, image, bgColor}) => {
    return (
        <div className={"feature-card"} style={{backgroundColor: bgColor}}>
            <div className={"image-holder"}>
                <img src={image} alt="feature-card-image"/>
            </div>
            <div className={"content"}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default HomeFeatures;