import React, { useEffect } from 'react';
import Layout from "../components/Layout";
import { toast } from 'react-toastify';
import AstronautsTable from "../components/AstronautsTable";


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
            <AstronautsTable
                astronauts={astronauts}
            />
        </Layout>
    );
};