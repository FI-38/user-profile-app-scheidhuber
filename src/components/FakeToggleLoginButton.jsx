// FakeToggleLoginButton-Komponente für den Login-Status
import { Button } from "react-bootstrap";

function FakeToggleLoginButton({ isLoggedIn, onToggle }) {
    return (
        <Button onClick={onToggle} style={{ position: 'fixed', right: 100, top: 100 }}>
        {isLoggedIn ? 'Ausloggen' : 'Einloggen'}
        </Button>
    );
}

export default FakeToggleLoginButton;