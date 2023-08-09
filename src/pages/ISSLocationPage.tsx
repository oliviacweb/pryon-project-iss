import React from 'react';
import Layout from "../components/Layout";
import Globe from '../components/Globe';

export default function ISSLocationPage() {
  return (
    <Layout>
      <h1 className="title">ISS Location</h1>
      <p className="subtitle">
        The current location of the International Space Station
      </p>
      <div className="mt-6">
        <Globe />
      </div>
    </Layout>
  );
};