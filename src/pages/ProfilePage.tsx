import React from 'react';
import Layout from "../components/Layout";
import { useSelector } from 'react-redux';
const ProfilePage: React.FC = () => {
    const userProfile = useSelector((state: any) => state.auth.userProfile);

    return (
        <Layout>
            {/* TODO: Add Username */}
            <h2 className="title">Hi There, {userProfile?.displayName}!</h2>
            {/* Show user data */}
            <h2 className="mt-6 subtitle">Profile Information:</h2>
            <div className="flex gap-6 items-center mt-5">
                <img src={userProfile?.photoURL} alt="Profile" className="w-24 h-24 rounded-full" referrerPolicy="no-referrer" />
                <div>
                    <p className="mt-2 text-sm">Name: <span className="font-bold">{userProfile?.displayName}</span></p>
                    <p className="mt-2 text-sm">Email: <span className="font-bold">{userProfile?.email}</span></p>
                </div>
            </div>
        </Layout>
    );
};

export default ProfilePage;