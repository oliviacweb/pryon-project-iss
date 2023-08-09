import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import loginImage from '../assets/images/login-astronaut.png';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: handle authentication
        dispatch(login());
    };

    return (
        <div className="flex">
            {/* Image */}
            <img src={loginImage} alt="Login" className="h-screen w-full" />
            <div className="p-20 w-full max-w-2xl flex flex-col justify-center">
                <h1 className="title">Welcome, Space Traveler!</h1>
                <p className="subtitle">Please Sign In To Continue</p>
                <form onSubmit={handleSubmit} className="my-5">
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="mt-1 mb-2"
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="mt-1"

                        />
                    </label>
                    <button type="submit" className="btn-primary mt-5 w-full">Login</button>
                </form>

                {/* Google and Facebook Login */}
                <div>
                    <p className="subtitle mb-4">- Or Sign In With</p>
                    <div className="flex gap-3">
                        <button className="btn-tertiary" onClick={handleSubmit}>
                            Google</button>
                        <button className="btn-tertiary" onClick={handleSubmit}>Facebook</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default LoginPage;