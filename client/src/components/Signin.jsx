import {Button, Form, Container} from 'react-bootstrap'

function Signin({setLogin}) {
    function handleClick(event) {
        event.preventDefault()
        setLogin(false)
    }
    
    return(
        <Container className="w-50 p-3 mt-5">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="secondary" type="submit" onClick={handleClick}>
                Sign Up
            </Button>
        </Form>
        </Container>
    )
}

export default Signin;