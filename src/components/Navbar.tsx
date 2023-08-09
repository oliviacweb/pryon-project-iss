import React from 'react';
import logo from '../assets/images/logo.png';
import styles from '../styles/components/Navbar.module.scss';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <img src={logo} alt="Logo" className="w-12 h-12" />
        </div>
    );
}