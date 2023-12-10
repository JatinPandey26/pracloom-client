import React from 'react';
import homePageBannerImage from '../assets/images/landing_page_main_image.webp'

const HomePageBanner = () => {
    return (
        <div className={"home-page-banner"}>
            <div className={"heading"}>
                <h2>Today’s Learners Change the world</h2>
                <div>
                    <p>Grab your courses today or create your platform</p>
                    <button>Explore</button>
                </div>

            </div>
            <div className={"image-holder"}>
                <img src={homePageBannerImage} alt="home-banner-image"/>
            </div>
        </div>
    );
};

export default HomePageBanner;