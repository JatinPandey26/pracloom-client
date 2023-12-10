// eslint-disable-next-line no-unused-vars
import React from 'react';
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import {Link} from "react-router-dom";

const HomePageNavbar = () => {
    const [theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme');
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return (
        <div className={"home-page-navbar"}>
            <h1>Pracloom</h1>
            <div className={"btn-wrapper"}>
                <button className={"sign-in"}><Link to={"/login"} className={'link'}>Login</Link></button>
                <button className={"sign-up"}><Link to={'/signup'} className={'link'}>Sign up</Link></button>
                <button className={"theme-toggle"}>
                    {theme === 'light' ? <MdLightMode onClick={toggleTheme}/> : <MdDarkMode onClick={toggleTheme}/>}
                </button>
            </div>
        </div>
    );
};

export default HomePageNavbar;