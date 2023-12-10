import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import '../styles/footer.scss'

const Footer = () => {
    return (
        <div className={'footer'}>
            <h5>Pracloom</h5>
            <div className={'links-internal'}>
                <a href="/">Home</a>
                <a href="/blogs">Blogs</a>
                <a href="/about">About</a>
                <a href="/support">Support</a>
            </div>
            <div className={'links-external'}>
                <a href="https://www.facebook.com/pracloom"><FaFacebook color={'#dbcdf0'}/></a>
                <a href="https://www.instagram.com/pracloom"><FaInstagram color={'#dbcdf0'}/></a>
                <a href="https://www.twitter.com/pracloom"><FaTwitter color={'#dbcdf0'}/></a>
                <a href="https://www.linkedin.com/pracloom"><FaLinkedin color={'#dbcdf0'}/></a>
            </div>
            <hr/>
            <div className={'footer-bottom'}>
                <p>© 2021 Pracloom. All rights reserved.</p>
                <p> Designed by <a href="https://www.linkedin.com/in/abhishek-kumar-4b1b3b1b0/">Jatin Pandey</a></p>
            </div>
        </div>
    );
};

export default Footer;