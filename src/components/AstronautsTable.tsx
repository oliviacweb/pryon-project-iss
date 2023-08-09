import React from 'react';
import Loader from "./Loader";
import { FaUserAstronaut, FaRocket } from "react-icons/fa";

type TableProps = {
    astronauts: any[];
};

const AstronautsTable: React.FC<TableProps> = ({ astronauts }) => {
    return (
        <div className="mt-6">
            {astronauts.length === 0 ? (
                <Loader />
            ) :
                <table className="w-full max-w-3xl">
                    <thead>
                        <tr className="bg-gradient-to-r from-[#04273d] to-[#031622]">
                            <th className="border-r px-4 py-2 text-white text-left  rounded"><span className=" flex gap-3 items-center"><FaUserAstronaut /> Astronaut Name</span></th>
                            <th className="border-r px-4 py-2 text-white text-left rounded"><span className=" flex gap-3 items-center"><FaRocket />  Craft</span></th>
                        </tr >
                    </thead >
                    <tbody>
                        {/* Map through astronauts retrieved by fetch */}
                        {astronauts.map((astronaut: any, index: number) => (
                            <tr key={astronaut.name} className={(index % 2) ? "bg-blue-50" : ""}>
                                <td className="border px-6 py-3 pl-6 rounded">{astronaut.name}</td>
                                <td className="border px-6 py-3 rounded">{astronaut.craft}</td>
                            </tr>
                        ))}
                    </tbody>
                </table >}
        </div >
    );
};

export default AstronautsTable;