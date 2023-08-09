import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/components/SideBar.module.scss';

type Props = {};

export default function SideBar({ }: Props) {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li className={styles.link}>
                    <Link to="/profile"  >Profile</Link>

                </li>
            </ul>
            {/* Links */}
            <Link to="/astronauts" className={styles.link}>Astronauts</Link>
            <Link to="/iss-location" className={styles.link}>ISS Location</Link>
        </div>
    );
}