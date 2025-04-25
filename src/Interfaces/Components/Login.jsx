import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Usecases/Slices/LoginSlice';
import Poster from './Poster';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, user, token } = useSelector(state => state.LogIn);
    const handleLogin = (e) => {
        dispatch(loginUser({ username, password }));
        e.preventDefault();
        setPassword('');
        setUsername('');
    };
    useEffect(()=>{
        if(user){
        navigate('/cart')
        }
    },[token , user, navigate])

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-violet-200 w-[90vw] container mx-auto my-4 rounded-lg">
                <Poster name="LogIn" info="HERE" />
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mb-24 w-full mx-4">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-violet-200 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-violet-200 focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                    {error && <p className="mt-4 text-center text-red-500">{error.message}</p>}
                    {user && <p className="mt-4 text-center text-green-500">Welcome, {user.username}!</p>}
                </div>
            </div>
        </>
    );
};

export default Login;
