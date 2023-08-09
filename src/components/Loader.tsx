import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loader: React.FC = () => {
    return (
        <div>
            <FaSpinner className="animate-spin text-2xl text-gray-300" />
        </div>
    );
};

export default Loader;