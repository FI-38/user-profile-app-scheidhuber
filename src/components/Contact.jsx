import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <>
      <h1 className="mb-4">Kontaktieren Sie uns</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Ihr Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control type="email" placeholder="Ihre E-Mail" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nachricht</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Ihre Nachricht" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Absenden
        </Button>
      </Form>
    </>
  );
}

export default Contact;
