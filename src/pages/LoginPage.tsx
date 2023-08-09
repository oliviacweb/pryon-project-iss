import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import { RootState } from '../redux/store';
import { Navigate } from "react-router-dom";
import { signInWithGoogle, signInWithEmail } from '../services/auth';
import { RiFacebookFill, RiGoogleFill } from 'react-icons/ri';
import { toast } from "react-toastify";
import styles from '../styles/pages/LoginPage.module.scss';

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
            toast.error("Invalid credentials. Try monkey and banana!");
        }
    };

    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithGoogle();
            dispatch(login(result));
            toast.success(`Welcome, ${result.displayName}!`);
        } catch (error) {
            toast.error("Something went wrong, try again!");
        }
    };

    // const handleSignInWitFacebook = async () => {
    //     try {
    //         const result = await signInWithFacebook();
    //         dispatch(login(result));
    //         toast.success(`Welcome, ${result.displayName}!`);
    //     } catch (error) {
    //         toast.error("Something went wrong, try again!");
    //         console.log(error)
    //     }
    // };


    // Redirect to Profile Page if authenticated
    if (isAuthenticated) {
        return <Navigate to="/profile" replace={true} />;
    }

    return (
        <div className="flex w-screen h-screen">
            {/* Astronaut Image */}
            <div className={styles.image} />
            <div className="p-20 w-3xl flex flex-col justify-center">
                <h1 className="title">Welcome, Space Traveler!</h1>
                <p className="subtitle">Please Sign In To Continue</p>
                {/* Local Email Login Form */}
                <form onSubmit={handleSubmit} className="my-5">
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="mt-1 mb-2"
                            placeholder="Username"
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="mt-1"
                            placeholder="Password"
                        />
                    </label>
                    <button type="submit" className="btn-primary mt-5 w-full">Login</button>
                </form>

                {/* Google Login */}
                <div>
                    <p className="subtitle mb-4">- Or Sign In With</p>
                    <div className="flex gap-3">
                        {/* Google Login */}
                        <button className="btn-tertiary flex gap-2 items-center" onClick={handleSignInWithGoogle}>
                            <RiGoogleFill className="text-2xl text-red-600" /> Google
                        </button>

                        {/* Facebook Login */}
                        {/* <button className="btn-tertiary flex gap-2 items-center" onClick={handleSignInWitFacebook}>
                            <RiFacebookFill className="text-2xl text-blue-600" /> Facebook
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;