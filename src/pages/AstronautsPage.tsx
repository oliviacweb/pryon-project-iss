import React from 'react';
import Layout from "../components/Layout";
import AstronautsTable from "../components/AstronautsTable";

const AstronautsPage: React.FC = () => {
    return (
        <Layout>
            <h1 className="title">Astronauts</h1>
            <p className="subtitle">
                A table of astronauts currently in space!
            </p>
            <div className="mt-6">
                <AstronautsTable />
            </div>
        </Layout>
    );
};

export default AstronautsPage;