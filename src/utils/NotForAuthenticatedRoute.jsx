import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function NotForAuthenticatedRoute(props) {
    const {Component} = props;
    const navigate = useNavigate()
    const {isAuthenticated} = useSelector(state => state.userState)
   
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/platform')
        }
    }, [isAuthenticated]);
    return (
        <div>
            <Component/>
        </div>
    );
}

export default NotForAuthenticatedRoute;