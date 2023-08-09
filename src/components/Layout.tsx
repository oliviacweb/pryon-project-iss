import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navigate } from "react-router-dom";
import styles from '../styles/components/Layout.module.scss';
import Navbar from "./Navbar";
import SideBar from "./SideBar";


type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    // Navigate to login page if not authenticated
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        // react-router-dom
        // https://reactrouter.com/web/api/Hooks
        <Navigate to="/dashboard" replace={true} />;
    }

    return (
        <div className={styles.layout}>
            <Navbar />
            {children}
            <div className={styles.contentWrapper}>
                <SideBar />
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}