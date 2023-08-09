import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import { RootState } from '../redux/store';
import loginImage from '../assets/images/login-astronaut.png';
import { Navigate } from "react-router-dom";
import { signInWithGoogle, signInWithEmail } from '../services/auth';
import { toast } from "react-toastify";

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await signInWithEmail(username, password);
            dispatch(login(result));
            toast.success(`Welcome, ${result.displayName}!`);
        } catch (error) {
            console.log(error);
            toast.error("Try monkey and banana!");
        }
    };

    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithGoogle();
            dispatch(login(result));
            toast.success(`Welcome, ${result.displayName}!`);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong, try again!");
        }

    };

    // Redirect to Profile Page if authenticated
    if (isAuthenticated) {
        return <Navigate to="/profile" replace={true} />;
    }

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
                    <button className="btn-tertiary" onClick={handleSignInWithGoogle}>Google</button>
                    {/* <button className="btn-tertiary" onClick={handleSubmit}>Facebook</button> */}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default LoginPage;