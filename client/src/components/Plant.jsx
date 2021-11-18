import {
    Card,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap'


function Plant({
    gardenData,
    viewPlants,
    plantNotes,
    setGardenData,
    currentUser
}) {


    function handlePlantSubmit(event) {
        event.preventDefault()
        const obj = {
            "plant_name": event.target[0].value,
            "garden_id": gardenData.id
        }

        fetch('/plants', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(data => console.log(data))
    }


    function handleDateOns(id, event) {
        event.preventDefault()
        const obj = {
            "planted_on": event.target[0].value,
            "sprouted_on": event.target[1].value,
            "flowered_on": event.target[2].value
        }

        // can't figure out how to dynamically generate the id for the fetch below... `/plants/${plant.plant_id}`

        fetch(`/plants/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(data => console.log(data))
    }


    function handleDeletePlant(id) {

        fetch(`/plants/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => resp.json()).then(data => console.log(data))
    }



    const plants = plantNotes.map(plant => {
        const notes = plant.notes.map(note => {
            return( 
                <>
                    Note Title: {note.note_title} 
                    <br/>
                    Note Description: {note.note_description}
                    <br/>
                </>
            )
        })

        return (
            <Col>
                <Card>
                    <Card.Img variant="top" src="https://static.thenounproject.com/png/148834-200.png" />
                    <Card.Body>
                        <Card.Title>{plant.plant_name}</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {notes}
                            <Form onSubmit={(event) => handleDateOns(plant.id, event)}>
                            <Form.Group className="mb-3" controlId="formPlantMilestones">
                                <Form.Label>Share Milestones</Form.Label>
                                <Form.Control placeholder="Planted On"/>
                                <Form.Control placeholder="Sprouted On"/>
                                <Form.Control placeholder="Flowered On"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                            <Button variant="secondary" type="submit"
                            onClick={() => handleDeletePlant(plant.id)}>Delete</Button>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {plants}
            </Row>
            <Row>
            <Form onSubmit={handlePlantSubmit}>
                    <Form.Group className="mb-3" controlId="formPlantName">
                        <Form.Label>Add Plant</Form.Label>
                        <Form.Control placeholder="Enter Plant Name"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                    
                </Form>
            </Row>

        
        </>
     )
 }

export default Plant
