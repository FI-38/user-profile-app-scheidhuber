import { Route, Routes } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import UserAppNav from './components/UserAppNav';
import Home from './components/Home';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <>
      <UserAppNav />
      <main>
        <Container className="pt-5">
          <Routes>
            <Route path="/" element={<Home title="Hallo Welt aus der App.jsx" />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
