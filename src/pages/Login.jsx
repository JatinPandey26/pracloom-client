import React from 'react';
import {FaFacebook, FaGoogle, FaTwitter} from "react-icons/fa";
import '../styles/SignUp.scss'
import {Button, Paper, TextField} from "@mui/material";
import HomePageNavbar from "../components/HomePageNavbar.jsx";
import signupPic from '../assets/images/signup-img.svg'
import {Link, useNavigate} from "react-router-dom";
import {useQuery, useQueryClient} from "react-query";
import {AxiosInstance} from "../utils/AxiosInstance.js";
import toast from "react-hot-toast";
import {useDispatch} from "react-redux";
import {login} from "../redux/Reducers/UserReducer.js";
import {CircularProgress} from '@mui/material';

const Login = () => {

    const [formdata, setFormData] = React.useState({})
    const [allowedToFetch, setAllowedToFetch] = React.useState(false)
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const fetchLogin = async () => {
        return await AxiosInstance.post(`/auth/authentication`, formdata)
    }

    const {isLoading, isError, data: loginResponse} =
        useQuery('login', fetchLogin, {
            enabled: allowedToFetch,

        })

    React.useEffect(() => {
        if (isError) {

            toast.error('Login Failed ')
            return;
        }
        if (loginResponse) {
            dispatch(login(loginResponse?.data?.token))
            toast.success('Login Successful')
            navigate('/platform')
            localStorage.setItem('pracloom-token', loginResponse?.data?.token)
            return;
        }
    }, [isError, loginResponse])


    const handleSubmit = async (e) => {
        e.preventDefault()

        setAllowedToFetch(true)
        await queryClient.invalidateQueries('login')
        setAllowedToFetch(false)
    }

    const hangleChange = (e) => {

        setFormData({...formdata, [e.target.id]: e.target.value})
    }


    return (
        <div className={'sign-up'}>
            <HomePageNavbar/>
            <Paper className={'paper'} variant={'elevation'} elevation={5}>
                <div className={'right'}>
                    <img src={signupPic}/>

                </div>
                <div className={'left'}>
                    <h3>Login</h3>
                    <form>

                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'email'} label={'Email'}
                                   variant={"outlined"}
                                   onChange={hangleChange}
                                   value={formdata.email}
                        />


                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'password'} label={'Password'}
                                   variant={"outlined"}
                                   type={'password'}
                                   onChange={hangleChange}
                                   value={formdata.password}
                        />
                        {
                            isLoading ?
                                <Button className={'button'} variant={'contained'}
                                        children={<CircularProgress size={25}/>}/> :
                                <Button className={'button'} variant={'contained'} onClick={handleSubmit}>Login</Button>
                        }
                        <div>
                            <p>
                                Don't have an account?
                            </p>
                            <span><Link className={'link switch-btn'} to={'/signup'}>Sign Up</Link></span>
                        </div>
                    </form>
                </div>

            </Paper>

        </div>
    );
};

export default Login;