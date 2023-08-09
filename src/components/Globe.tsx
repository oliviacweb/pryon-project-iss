import React, { useEffect } from 'react';
import Globe from 'react-globe.gl';
import earthImage from '../assets/images/earth-blue-marble.jpg';
import spaceImage from '../assets/images/night-sky.png';
import { toast } from 'react-toastify';
import Loader from "./Loader";

interface MapMarkerProps {
    latitude: number;
    longitude: number;
}

const MyGlobe: React.FC = () => {
    const [location, setLocation] = React.useState<MapMarkerProps | null>(null);

    const [dimensions] = React.useState({
        width: window.innerWidth - 290,
        height: window.innerHeight - 305
    });

    const fetchISSLocation = () => {
        fetch("http://api.open-notify.org/iss-now.json")
            .then(response => response.json())
            .then(data => {
                setLocation(data.iss_position);
            }).catch(error => {
                toast.error(`Error:${error.message}`, {
                    toastId: "ISSLocationPageError"
                });
            });
    };

    useEffect(() => {
        fetchISSLocation();
        // Fetch the ISS location every 5 seconds
        const interval = setInterval(() => {
            fetchISSLocation();
        }, 5000);
        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    if (!location) {
        return <Loader />;
    }

    return <Globe
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
    />;
};


export default MyGlobe;