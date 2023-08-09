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
            {/* TODO: Add Username */}
            <h2 className="mb-4">Hi there, "Username"!</h2>
            <button onClick={handleLogout} className="btn-primary">
                Logout
            </button>
        </Layout>
    );
};

export default ProfilePage;