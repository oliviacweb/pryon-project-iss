import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RootState } from './redux/store';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import AstronautsPage from "./pages/AstronautsPage";
import IssLocationPage from "./pages/ISSLocationPage";


const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/astronauts" element={<AstronautsPage />} />
        <Route path="/iss-location" element={<IssLocationPage />} />

        {/* Defaults to Login Page */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
