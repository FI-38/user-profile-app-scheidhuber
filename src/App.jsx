import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import UserAppNav from './components/UserAppNav';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";

import './App.css';

function App() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');

    if (token && storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
    }
  }, []);

  const handleToggleLogin = () => {
      setIsLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      navigate('/');
  };

  return (
    <>
      <UserAppNav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

      <main>
        <Container className="pt-5">
          <Routes>
            <Route path="/" element={<Home isLoggedIn={ isLoggedIn } />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/login" element={
              <Login isLoggedIn={isLoggedIn}
                     setIsLoggedIn={setIsLoggedIn} />
            }/>
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfile isLoggedIn={isLoggedIn} userId={userId} />} />

          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
