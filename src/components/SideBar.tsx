import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { firebaseSignOut } from '../services/auth';
import {
    RiUserSharedFill,
    RiSpaceShipFill,
    RiRadarFill,
    RiLogoutBoxFill
} from 'react-icons/ri';
import styles from '../styles/components/SideBar.module.scss';

const links = [
    {
        to: '/profile',
        icon: <RiUserSharedFill />,
        label: 'Profile'
    },
    {
        to: '/astronauts',
        icon: <RiSpaceShipFill />,
        label: 'Astronauts'
    },
    {
        to: '/iss-location',
        icon: <RiRadarFill />,
        label: 'ISS Location'
    }
];

export default function SideBar() {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        await firebaseSignOut();
        dispatch(logout());
    };
    return (
        <div className={styles.sidebar}>
            {/* Links */}
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={link.to}
                    className={`${styles.link}
                    ${location.pathname.includes(link.to)
                        && styles.activeLink
                        }`}
                >
                    {link.icon} {link.label}
                </Link>
            ))}

            {/* Logout */}
            <div role="button" onClick={handleLogout} className={styles.link}>
                <RiLogoutBoxFill /> Logout
            </div >
        </div>
    );
}