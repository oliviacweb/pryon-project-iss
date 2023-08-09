import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { firebaseSignOut } from '../services/auth';
import styles from '../styles/components/SideBar.module.scss';

type Props = {};

export default function SideBar({ }: Props) {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        await firebaseSignOut();
        dispatch(logout());
    };
    return (
        <div className={styles.sidebar}>
            {/* Links */}
            <Link to="/profile" className={styles.link}>Profile</Link>
            <Link to="/astronauts" className={styles.link}>Astronauts</Link>
            <Link to="/iss-location" className={styles.link}>ISS Location</Link>
            {/* Logout */}
            <div role="button" onClick={handleLogout} className={styles.link}>
                Logout
            </div >
        </div>
    );
}