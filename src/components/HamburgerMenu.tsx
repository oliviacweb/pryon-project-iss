import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { firebaseSignOut } from '../services/auth';
import { toast } from "react-toastify";
import {
    RiUserSharedFill,
    RiSpaceShipFill,
    RiRadarFill,
    RiLogoutBoxFill
} from 'react-icons/ri';

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


const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Close menu when clicked outside
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        await firebaseSignOut();
        dispatch(logout());
        toast.success('Logged out successfully');
    };

    return (
        <div className="relative" ref={menuRef}>
            <div onClick={() => setIsOpen(!isOpen)} className="space-y-2 cursor-pointer ">
                <div className="w-8 h-0.5 bg-white rounded"></div>
                <div className="w-8 h-0.5 bg-white rounded"></div>
                <div className="w-8 h-0.5 bg-white rounded"></div>
            </div>

            {isOpen && (
                <div className="absolute top-8 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {links.map((link, index) => (
                            <Link
                                role="menuitem"
                                key={index}
                                to={link.to}
                                className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                            >
                                {link.icon} {link.label}
                            </Link>
                        ))}
                        {/* Separator */}
                        <hr className="my-1" />
                        {/* Logout */}
                        <div role="button" onClick={handleLogout} className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 w-full">
                            <RiLogoutBoxFill /> Logout
                        </div >
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;