import {Container, Navbar, Nav} from 'react-bootstrap'

function Navigation({currentUser, setCurrentUserGardens, setCurrentUser}) {
    
    function handleDelete(e) {
        fetch('/logout', {method: 'DELETE'})
        .then(resp => {
            setCurrentUserGardens([])
            setCurrentUser(null)
        })
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="/home">{currentUser.username}'s Gardens</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={handleDelete} href="/">User Logout</Nav.Link>
                    <Nav.Link href="/">Gardens</Nav.Link>
                    <Nav.Link href="/communityplants">Community Plants</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        
    )
}

export default Navigation