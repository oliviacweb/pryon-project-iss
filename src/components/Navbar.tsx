import React from 'react';
import logo from '../assets/images/logo.png';
import HamburgerMenu from './HamburgerMenu';
import styles from '../styles/components/Navbar.module.scss';

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <HamburgerMenu />            
        </div>
    );
}

export default Navbar