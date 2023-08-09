import React from 'react';
// Logout
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import Layout from "../components/Layout";

const ProfilePage: React.FC = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Layout>
            <h2>Profile Page</h2>
            <p>Welcome, Traveler!</p>
            <button onClick={handleLogout}>
                Logout
            </button>
        </Layout>
    );
};

export default ProfilePage;