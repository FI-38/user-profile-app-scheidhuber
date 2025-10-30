// src/components/Login.jsx
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function Login({ isLoggedIn, setIsLoggedIn }) {

  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    try {
        const response = await fetch(`http://fi38.mshome.net:3001/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token); // Speichert das Token
            localStorage.setItem('userId', data.userId);  // userId speichern
            setMessage('Erfolgreich eingeloggt!');
            setIsLoggedIn(true);
        } else {
            setMessage(data.error || 'Login fehlgeschlagen');
        }
    } catch (error) {
        console.error("Fehler beim Login:", error);
        setMessage("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <div className="mt-4">

      <h3>{isLoggedIn ? 'Willkommen zurück!' : 'Bitte einloggen'}</h3>

      { message && <Alert variant="success">{message}</Alert> }

      {!isLoggedIn && (<Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Benutzername</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Benutzernamen eingeben"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Passwort</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Passwort eingeben"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Anmelden
        </Button>
      </Form>)
      }
    </div>
  );
}

export default Login;