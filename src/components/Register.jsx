import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;

    // Clientseitige Validierung: Passwörter müssen übereinstimmen
    if (password !== confirmPassword) {
      setMessage('Die Passwörter stimmen nicht überein');
      return;
    }

    // Passwortlänge prüfen (optional, da auch serverseitig geprüft)
    if (password.length < 8) {
      setMessage('Passwort muss mindestens 8 Zeichen lang sein');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, name, email, password }),
      });
      console.log(response);

      const data = await response.json();

      if (response.ok) {
        setMessage('Registrierung erfolgreich! Sie werden weitergeleitet...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setMessage(data.error || 'Registrierung fehlgeschlagen');
      }
    } catch (error) {
      console.error('Fehler bei der Registrierung:', error);
      setMessage('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
    }

    e.target.reset();
  };

  return (
    <div className="mt-4">
      <h3>Registrierung</h3>

      {message && (
        <Alert variant={message.includes('erfolgreich') ? 'success' : 'danger'}>
          {message}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Vollständigen Namen eingeben"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="E-Mail-Adresse eingeben"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Passwort</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Passwort eingeben (min. 8 Zeichen)"
            required
            minLength={8}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Passwort wiederholen</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Passwort erneut eingeben"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrieren
        </Button>
      </Form>
    </div>
  );
}

export default Register;
