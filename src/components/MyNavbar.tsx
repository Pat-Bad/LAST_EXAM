import { Navbar, Container } from "react-bootstrap"

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="danger">
            <Container>
                <Navbar.Brand href="#home" className="text-danger">FakeApple</Navbar.Brand>
                <Navbar.Brand href="#home"><img src="../assets/assets/logos/apple.svg" width="30"
                    height="30"
                    className="d-inline-block align-top" /> <span className="text-danger">Music</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Container>
        </Navbar >
    )
}

export default MyNavbar