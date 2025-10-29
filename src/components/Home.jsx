import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home({ isLoggedIn }) {

  return (
    <>
      <h1 className="mb-4">Willkommen auf der Home-Seite</h1>
      {isLoggedIn ? (
      <>
          Sie sind erfolgreich eingeloggt! Gehen Sie zum Profil, um Ihre Daten zu verwalten.
          <br />
          <Button as={Link} to="/profile" variant="primary">Mein Profil</Button>
      </>
      ) : (
      <>
          Melden Sie sich an, um Ihr Profil zu erstellen und zu verwalten.
          <br />
          <Button as={Link} to="/login" variant="secondary">Anmelden</Button>
      </>
      )}
    </>
  );
}

export default Home;
