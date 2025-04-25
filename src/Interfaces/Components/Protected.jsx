import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import loader from '../../Assets/Logo/circle-9360_256.gif';
import { useNavigate } from 'react-router-dom';
const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    const user = useSelector(state => state.LogIn);
    const name = localStorage.getItem('firstName');
    useEffect(() => {
        if (!name) {
            navigate('/login')
        }
    }, [])


    return (
        <div>
        <Component /> 
        </div>
    )
}

export default Protected
