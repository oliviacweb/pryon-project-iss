import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 216px)',
    marginTop: '16px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

interface MapMarkerProps {
    lat: number;
    lng: number;
}

const ISSMap: React.FC<MapMarkerProps> = ({ lat, lng }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBplRnJgnPDSAeZ2-e1vWqjyo7s4CeR0bE"
    });

    const [map, setMap] = React.useState<MapMarkerProps | null>(null);

    // https://www.npmjs.com/package/@react-google-maps/api
    const onLoad = React.useCallback((map: any) => {
        setMap(map);
    }, []);

    const onUnmount = React.useCallback((map: any) => {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={2}
            onLoad={onLoad}
            onUnmount={onUnmount}
            mapTypeId="satellite"
        >
            {/* Marker */}
            <>
                <Marker
                    position={{ lat: lat, lng: lng }}
                />
            </>

        </GoogleMap>
    ) : <></>;
};

export default React.memo(ISSMap);