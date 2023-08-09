import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RootState } from './redux/store';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Router>
    <Routes>
      <Route path="/" element={!isAuthenticated ? <LoginPage /> : <ProfilePage />} />
      <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <LoginPage />} />
    </Routes>
  </Router>
  );
}

export default App;
