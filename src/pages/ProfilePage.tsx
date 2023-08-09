import React from 'react';
import Layout from "../components/Layout";
import { useSelector } from 'react-redux';
const ProfilePage: React.FC = () => {
    const userProfile = useSelector((state: any) => state.auth.userProfile);

    return (
        <Layout>
            {/* TODO: Add Username */}
            <h2 className="title">Hi There, {userProfile?.displayName}!</h2>
            <h2 className="subtitle">Profile Information</h2>
            {/* Show user data */}
            <div className="flex flex-col md:flex-row gap-8 items-center mt-6 shadow md:w-max p-12 rounded-2xl">
                <img src={userProfile?.photoURL} alt="Profile" className="w-40 h-40 rounded-full" referrerPolicy="no-referrer" />
                <div>
                    <p className="mt-2 text-sm">Name: <span className="font-bold">{userProfile?.displayName}</span></p>
                    <p className="mt-2 text-sm">Email: <span className="font-bold">{userProfile?.email}</span></p>
                </div>
            </div>
        </Layout>
    );
};

export default ProfilePage;