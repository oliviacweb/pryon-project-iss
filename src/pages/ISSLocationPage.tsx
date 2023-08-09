import React, { useEffect } from 'react';
import Layout from "../components/Layout";
import Map from '../components/Map';

export default function ISSLocationPage() {
    const [location, setLocation] = React.useState({
        latitude: 6.1927,
        longitude: -57.7714
    });
    useEffect(() => {
        fetch("http://api.open-notify.org/iss-now.json")
            .then(response => response.json())
            .then(data => {
                setLocation(data.iss_position);
            });
    }, []);
    return (
        <Layout>
            <h1 className="title">ISS Location</h1>
            <p className="subtitle">
                The current location of the International Space Station.
            </p>

            {/* Display the latitude and longitude of the ISS on a map. */}
            <Map
                lat={location.latitude}
                lng={location.longitude}
            />

        </Layout>
    );
}