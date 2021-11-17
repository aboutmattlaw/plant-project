
import {Button, Form, Container} from 'react-bootstrap'
import { Link } from "react-router-dom"

function CreateGarden({currentUser}){

    function handleSubmit(event) {
        event.preventDefault()
        const obj = {
            "garden_name": event.target[0].value,
            "user_id": currentUser.id 
        }
        console.log('Body Object', obj)
        fetch('/gardens', {
            method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => console.log('New Garden', data))
    }
    
    return(
        <Container className="w-50 p-3 mt-5">
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicGardenName">
                <Form.Label>Garden Name</Form.Label>
                <Form.Control placeholder="Enter Garden Name" />
            </Form.Group>

           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        
            
        </Form>
        </Container>
    )
}

export default CreateGarden;