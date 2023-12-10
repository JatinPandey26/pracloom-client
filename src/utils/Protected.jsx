import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function ProtectedRoute(props) {
    const {Component} = props;
    const navigate = useNavigate()
    const {isAuthenticated} = useSelector(state => state.userState)
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, []);
    return (
        <div>
            <Component/>
        </div>
    );
}

export default ProtectedRoute;