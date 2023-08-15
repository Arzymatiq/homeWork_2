import Container from "react-bootstrap/Container";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="" to="/list" href="#">
                            <Button variant="dark">list</Button>
                        </Link>

                        <Link className="" to="/" href="#">
                            <Button variant="dark">add</Button>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
