import {Button, Form, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Signin({setCurrentUser}) {
    function handleSubmit(e) {
        e.preventDefault()
        const obj = {
            "username": e.target[0].value, 
            "password": e.target[1].value
        }

        fetch('/login', {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(obj)
        })
        .then(resp => {
            if(resp.ok) {
                resp.json().then(user => setCurrentUser(user))
            } else {
                resp.json().then(data => alert(data.error))
            }
        })
    }
    
    return(
        <Container className="w-50 p-3 mt-5">
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {/* <Button variant="secondary" type="submit" onClick={handleClick}>
                Sign Up
            </Button> */}
            <Link to="/signup">Sign Up</Link>
        </Form>
        </Container>
    )
}

export default Signin;