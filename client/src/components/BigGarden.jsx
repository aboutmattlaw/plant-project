import {Row, Button, Container, Form } from "react-bootstrap"
import CreateGarden from "./CreateGarden"
import Garden from "./Garden"

function BigGarden({setCurrentUser, currentUser, setCurrentUserGardens, currentUserGardens}) {
    
    function handleClick(e) {
        fetch('/logout', {method: 'DELETE'})
        .then(resp => setCurrentUser(null))

    }


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
        <>
   
            <div>
                Garden Landing
            </div>

            <button onClick={handleClick}>Logout "User"</button>
        

        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicGardenName">
                <Form.Label>Garden Name</Form.Label>
                <Form.Control placeholder="Enter Garden Name" />
            </Form.Group>

           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        
            
        </Form>


        

   
   <Garden currentUser={currentUser} setCurrentUserGardens={setCurrentUserGardens} currentUserGardens={currentUserGardens}></Garden>

      </>
    )
}

export default BigGarden