import React, { useState, useEffect } from 'react';
import Loader from "./Loader";
import { FaUserAstronaut, FaRocket } from "react-icons/fa";
import { toast } from 'react-toastify';
import { fetchAstronauts } from '../services/api';

const AstronautsTable: React.FC = () => {
    const [astronauts, setAstronauts] = useState([]);
    const [error, setError] = useState<string | null>(null);  // New state for error

    useEffect(() => {
        const getAstronauts = async () => {
            try {
                const data = await fetchAstronauts();
                setAstronauts(data);
                setError(null);  // Clear any previous error on success
            } catch (error) {
                setError(`Error: ${error}`);
                toast.error(`Error:${error}`, {
                    toastId: "AstronautsPageError"
                });
            }
        };

        getAstronauts();
    }, []);

    // If there's an error, display error message
    if (error) return <div className="font-bold text-sm">
        <p>Sorry there was an error fetching astronauts..</p>
        <p className="text-red-500">{error}</p>
    </div>;

    // No error but astronauts data hasn't loaded, show the loader
    if (astronauts.length === 0) return <Loader />;

    return (
        <table className="w-full max-w-3xl">
            <thead>
                <tr className="bg-gradient-to-r from-[#04273d] to-[#031622]">
                    <th className="border-r px-4 py-2 text-white text-left  rounded"><span className=" flex gap-3 items-center"><FaUserAstronaut /> Astronaut Name</span></th>
                    <th className="border-r px-4 py-2 text-white text-left rounded"><span className=" flex gap-3 items-center"><FaRocket />  Craft</span></th>
                </tr>
            </thead>
            <tbody>
                {/* Map through astronauts retrieved by fetch */}
                {astronauts.map((astronaut: any, index: number) => (
                    <tr key={astronaut.name} className={(index % 2) ? "bg-blue-50" : ""}>
                        <td className="border px-6 py-3 pl-6 rounded">{astronaut.name}</td>
                        <td className="border px-6 py-3 rounded">{astronaut.craft}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AstronautsTable;