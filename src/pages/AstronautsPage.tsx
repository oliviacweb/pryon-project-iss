import React, { useEffect } from 'react';
import Layout from "../components/Layout";
import { toast } from 'react-toastify';
import Loader from "../components/Loader";

export default function AstronautsPage() {
    const [astronauts, setAstronauts] = React.useState([]);
    useEffect(() => {
        fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then(data => {
                setAstronauts(data.people);
            }).catch(error => {
                toast.error(`Error:${error.message}`, {
                    toastId: "AstronautsPageError"
                });
            });
    }, []);

    return (
        <Layout>
            <h1 className="title">Astronauts</h1>
            <p className="subtitle">
                A table of astronauts currently in space!
            </p>
            <div className="mt-6">
                {astronauts.length ?

                    <table className="w-full max-w-3xl">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 bg-blue-50">Astronaut Name</th>
                                <th className="border px-4 py-2 bg-blue-50">Craft</th>
                            </tr>
                            {/* Map through astronauts retrieved by fetch */}
                            {astronauts.map((astronaut: any) => (
                                <tr key={astronaut.name}>
                                    <td className="border px-6 py-3 text-center">{astronaut.name}</td>
                                    <td className="border px-6 py-3 text-center">{astronaut.craft}</td>
                                </tr>
                            ))}
                        </thead>
                    </table>
                    :
                    <Loader />}
            </div>

        </Layout>
    );
};