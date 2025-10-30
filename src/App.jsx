import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import UserAppNav from './components/UserAppNav';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from "./components/Login";
import FakeToggleLoginButton from './components/FakeToggleLoginButton';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleLogin = () => {
      setIsLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
      navigate('/');
  };

  return (
    <>

      <FakeToggleLoginButton isLoggedIn={isLoggedIn} onToggle={handleToggleLogin} />

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

          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
