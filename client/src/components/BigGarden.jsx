import {Row, Button, Container, Form } from "react-bootstrap"
import CreateGarden from "./CreateGarden"
import Garden from "./Garden"
import Navigation from "./Navigation"

function BigGarden({setCurrentUser, currentUser, setCurrentUserGardens, currentUserGardens}) {
    
    // function handleDelete(e) {
    //     fetch('/logout', {method: 'DELETE'})
    //     .then(resp => {
    //         setCurrentUserGardens([])
    //         setCurrentUser(null)
    //     })
    // }

    function handleSubmit(event) {
        event.preventDefault()
        const obj = {
            "garden_name": event.target[0].value,
            "user_id": currentUser.id 
        }
       
        fetch('/gardens', {
            method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => {
            setCurrentUserGardens(value => value = [...currentUserGardens, data])
        })
    }
    
    
    return(  
        <>
            <Navigation currentUser={currentUser} setCurrentUser={setCurrentUser} setCurrentUserGardens={setCurrentUserGardens} />
            <div>Garden Landing</div>

        
            <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicGardenName">
                    <Form.Label>Garden Name</Form.Label>
                    <Form.Control placeholder="Enter Garden Name" />
                </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
            </Form>
            </Container>

            <Garden currentUser={currentUser} setCurrentUserGardens={setCurrentUserGardens} currentUserGardens={currentUserGardens}></Garden>

        </>
    )
}

export default BigGarden