import React from 'react';
import '../styles/platform-layout.scss'
import {Avatar, Button, Menu, MenuItem} from "@mui/material";
import Fade from '@mui/material/Fade';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/Reducers/UserReducer.js";
import {useNavigate} from "react-router-dom";
import {FaBugSlash} from 'react-icons/fa6'
import {FaShoppingBag, FaBell} from 'react-icons/fa'
import {MdOutlineInventory} from 'react-icons/md'
import {IoSettings, IoRocketSharp} from 'react-icons/io5'
import {IoMdSettings} from "react-icons/io";

const PlatFormNavbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {user} = useSelector(state => state.userState)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('pracloom-token')
        localStorage.removeItem('X-TenantID')
        dispatch(logout())
        navigate("/")
    }

    return (
        <div className={"platform-navbar"}>
            <div className={"left"}>
                <h1>Pracloom</h1>
            </div>
            <div className={"right"}>
                <div>
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Avatar sx={{height: '2rem', width: '2rem'}} alt={'profile-picture'}
                                src={user?.profile_picture_url
                                }></Avatar>
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export const PlatformSidebar = () => {

    const [active, setActive] = React.useState('settings')
    const navigate = useNavigate()
    React.useEffect(() => {
        const icons = document.querySelectorAll('.icons')
        icons.forEach(icon => {
            icon.addEventListener('click', () => {
                icons.forEach(icon => {
                    icon.classList.remove('active')
                })
                icon.classList.add('active')
                setActive(icon.id)
                navigate(`/platform/${icon.id}`)
            })
        })
    }, [active])


    return (
        <div className={"platform-sidebar"}>
            <Avatar id={'settings'} className={'icons'}><IoMdSettings/></Avatar>
            <Avatar id={'inventory'} className={'icons'}><MdOutlineInventory/></Avatar>
            <Avatar id={'bug'} className={'icons'}><FaBugSlash/></Avatar>
            <Avatar id={'parallelism'} className={'icons'}><IoRocketSharp/></Avatar>
            <Avatar id={'bell'} className={'icons'}><FaBell/></Avatar>
            <Avatar id={'bag'} className={'icons'}><FaShoppingBag/></Avatar>
        </div>
    )
}

export default PlatFormNavbar;