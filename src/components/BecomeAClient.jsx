import React from 'react';
import '../styles/platform-layout.scss'
import {Paper, TextField, Button} from "@mui/material";
import signupPic from '../assets/images/signup-img.svg'
import {CircularProgress} from '@mui/material';
import {useDispatch} from "react-redux";
import {AxiosInstanceMultipart} from "../utils/AxiosInstance.js";
import {useMutation} from "react-query";
import {Link, useNavigate} from "react-router-dom";
import '../styles/platform-register-as-client.scss'
import bgImg from '../assets/images/client-register.svg'
import toast from "react-hot-toast";

const BecomeAClient = () => {
    const [formdata, setFormData] = React.useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const fetchRegisterClient = async () => {
        const formTemp = new FormData()
        formTemp.append('name', formdata.name)
        formTemp.append('email', formdata.email)
        formTemp.append('number', formdata.number)
        formTemp.append('address', formdata.address)
        formTemp.append('logo', formdata.logo)

        return await AxiosInstanceMultipart.post(`/organization/new`, formTemp)
    }

    const {mutate: clientMutation, isLoading, isError, isSuccess, data: response} = useMutation(
        fetchRegisterClient
    )

    const handleChange = (e) => {

        if (e.target.id === 'logo') setFormData({...formdata, [e.target.id]: e.target.files[0]})
        else setFormData({...formdata, [e.target.id]: e.target.value})

    }


    // handle response from server

    React.useEffect(() => {
        if (isSuccess) {
            toast.success('Organization Registered Successfully')
            navigate('/platform/parallelism/org/' + response.data.id)
        }
    })

    return (
        <div className={'platform-register-client'} style={{backgroundImage: `url(${bgImg})`}}>

            <Paper className={'paper'} variant={'elevation'} elevation={10}>
                <div className={'right'}>
                    <img src={signupPic}/>

                </div>
                <div className={'left'}>
                    <h3>Register Your Organization</h3>
                    <form>
                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'name'} label={'Name'}
                                   variant={"outlined"}
                                   onChange={handleChange}
                                   value={formdata.name}
                        />
                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'email'} label={'Email'}
                                   variant={"outlined"}
                                   onChange={handleChange}
                                   value={formdata.email}
                        />

                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'number'} label={'Contact Number'}
                                   variant={"outlined"}
                                   onChange={handleChange}
                                   value={formdata.number}
                        />
                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'address'} label={'Address'}
                                   variant={"outlined"}
                                   onChange={handleChange}
                                   value={formdata.address}
                        />

                        <TextField size={'small'}
                                   sx={{backgroundColor: '#fff', color: '#000'}}
                                   className={'text-field'} margin={'normal'} id={'logo'} label={'logo'}
                                   InputLabelProps={{shrink: true}}
                                   variant={"outlined"}
                                   type={'file'}
                                   onChange={handleChange}
                        />


                        {
                            isLoading ?
                                <Button className={'button'} variant={'contained'}
                                        children={<CircularProgress size={25}/>}/> :
                                <Button className={'button'} variant={'contained'}
                                        onClick={clientMutation}>Register</Button>
                        }

                    </form>
                </div>

            </Paper>

        </div>
    );
};

export default BecomeAClient;