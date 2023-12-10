import React from 'react';
import {FaFacebook, FaGoogle, FaTwitter} from "react-icons/fa";
import '../styles/SignUp.scss'
import {Button, Paper, TextField} from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import HomePageNavbar from "../components/HomePageNavbar.jsx";
import signupPic from '../assets/images/signup-img.svg'
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className={'sign-up'}>
            <HomePageNavbar/>
            <Paper className={'paper'} variant={'elevation'} elevation={5}>
                <div className={'left'}>
                    <h3>Sign Up</h3>
                    <form>
                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'firstname'} label={'First Name'}
                                   variant={"outlined"}/>
                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'middlename'} label={'Middle Name'}
                                   variant={"outlined"}/>
                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'lastname'} label={'Last Name'}
                                   variant={"outlined"}/>
                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'email'} label={'Email'}
                                   variant={"outlined"}/>
                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'password'} label={'Password'}
                                   variant={"outlined"}
                                   type={'password'}
                        />
                        <DatePicker className={'text-field '}
                                    label={'Date of Birth'}
                                    inputFormat={'DD/MM/YYYY'}
                                    margin={'normal'}
                        />
                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'country'} label={'Country'}
                                   variant={"outlined"}/>
                        <TextField size={'small'} type={'password'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'Image'} label={'Image'}
                                   InputLabelProps={{shrink: true}}
                                   variant={"outlined"}
                                   type={'file'}
                        />
                        <Button className={'button'} variant={'contained'}>Sign Up</Button>
                        <p>Already have an account? <Link className={'link switch-btn'} to={'/login'}>Login</Link></p>
                    </form>
                </div>
                <div className={'right'}>
                    <img src={signupPic}/>

                </div>
            </Paper>

        </div>
    );
};

export default SignUp;