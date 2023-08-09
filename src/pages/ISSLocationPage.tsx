import React, { useEffect } from 'react';
import Layout from "../components/Layout";
import { toast } from 'react-toastify';
import Globe from '../components/Globe';
import Loader from '../components/Loader';

type ISSPosition = {
  latitude: number;
  longitude: number;
};


export default function ISSLocationPage() {
  const [location, setLocation] = React.useState<ISSPosition | null>(null);

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


  return (
    <Layout>
      <h1 className="title">ISS Location</h1>
      <p className="subtitle">
        The current location of the International Space Station
      </p>
      <div className="mt-6">
        {location ? <Globe lat={location.latitude} lng={location.longitude} /> : <Loader />}
      </div>
    </Layout>
  );
};