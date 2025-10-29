// src/components/Login.jsx
import { Form, Button } from 'react-bootstrap';

function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    e.target.reset(); // Formular zurücksetzen
    console.log(username);
    console.log(password);
  };

  return (
    <div className="mt-4">
      <h3>Bitte einloggen</h3>
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
      </Form>
    </div>
  );
}

export default Login;