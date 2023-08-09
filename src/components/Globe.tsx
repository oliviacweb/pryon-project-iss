import React, { useEffect } from 'react';
import Globe from 'react-globe.gl';
import earthImage from '../assets/images/earth-blue-marble.jpg';
import spaceImage from '../assets/images/night-sky.png';
import { toast } from 'react-toastify';
import Loader from "./Loader";
import { fetchISSLocation } from '../services/api';

interface MapMarkerProps {
    latitude: number;
    longitude: number;
}

const MyGlobe: React.FC = () => {
    const [location, setLocation] = React.useState<MapMarkerProps | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    const isDesktop = window.innerWidth >= 1024;  // Determine if it's desktop

    const [dimensions] = React.useState({
        width: isDesktop ? window.innerWidth - 290 : window.innerWidth - 40,
        height: isDesktop ? window.innerHeight - 305 : window.innerHeight
    });

    useEffect(() => {
        const fetchLocationAndUpdateState = async () => {
            try {
                const locationData = await fetchISSLocation();
                setLocation(locationData);
                setError(null);  // Clear any previous error on success
            } catch (error) {
                setError(`Error: ${error}`);
                toast.error(`Error: ${error}`, {
                    toastId: "ISSLocationPageError"
                });
            }
        };

        fetchLocationAndUpdateState();
        // Fetch the ISS location every 5 seconds
        const interval = setInterval(fetchLocationAndUpdateState, 5000);
        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    // If there's an error, display the error message
    if (error) return <div className="font-bold text-sm">
        <p>Sorry there was an error fetching ISS Location..</p>
        <p className="text-red-500">{error}</p>
    </div>;

    // No error but location data hasn't loaded, show the loader
    if (!location) return <Loader />;

    return (
        <Globe
            waitForGlobeReady={true}
            width={dimensions.width}
            height={dimensions.height}
            backgroundImageUrl={spaceImage}
            globeImageUrl={earthImage}
            // Ring marker
            ringsData={[
                {
                    lat: location.latitude,
                    lng: location.longitude,
                }
            ]}
            ringAltitude={0.2}
            ringMaxRadius={4}
        />
    );
};

export default MyGlobe;