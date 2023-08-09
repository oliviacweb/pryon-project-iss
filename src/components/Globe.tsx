import React from 'react';
import Globe from 'react-globe.gl';
import earthImage from '../assets/images/earth-blue-marble.jpg';
import spaceImage from '../assets/images/night-sky.png';


interface MapMarkerProps {
    lat: number;
    lng: number;
}

const MyGlobe: React.FC<MapMarkerProps> = ({ lat, lng }) => {
    const [dimensions] = React.useState({
        width: window.innerWidth - 290,
        height: window.innerHeight - 305
    });


    // support rendering markers 
    return <Globe
        waitForGlobeReady={true}
        width={dimensions.width}
        height={dimensions.height}
        backgroundImageUrl={spaceImage}
        globeImageUrl={earthImage}
        ringsData={[
            {
                lat: lat,
                lng: lng,
            }
        ]}
        ringAltitude={0.2}
        ringMaxRadius={4}

        // Point markers
        pointsData={[
            {
                lat: lat,
                lng: lng,
                altitude: 0.1,
                radius: 2
            }
        ]}
        pointColor="color"
        pointAltitude="altitude"
        pointRadius="radius"

    />;
};


export default MyGlobe;