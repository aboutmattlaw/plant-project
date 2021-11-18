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
    plantList,
    setGardenData,
    currentUser,
    setPlantList
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
        }).then(resp => resp.json()).then(data => {
            fetch(`gardennotes/${data.garden_id}`)
                .then(resp => resp.json())
                .then(data => setPlantList(data))
        })
    }





    function handleNoteSubmit(plant_id, gardenId, event) {
        event.preventDefault()
        const obj = {
            "note_title": event.target[0].value, // fix
            "note_description": event.target[1].value,
            "image_url": event.target[2].value,
            "plant_id": plant_id,
            "user_id": currentUser.id
        }

        fetch(`/notes`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then((resp => {
            if(resp.ok) {
                fetch(`gardennotes/${gardenId}`)
                .then(resp => resp.json())
                .then(data => setPlantList(data))
            } else {
                console.log("error!")
            }
        }))
    }




    function handleDateOns(id, gardenId, event) {
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
        }).then(resp => {
            if(resp.ok) {
                fetch(`gardennotes/${gardenId}`)
                .then(resp => resp.json())
                .then(data => setPlantList(data))
            } else {
                console.log("error!")
            }
        })
    }




    function handleDeletePlant(id, gardenId) {

        fetch(`/plants/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => {
                fetch(`gardennotes/${gardenId}`)
                .then(resp => resp.json())
                .then(data => setPlantList(data))
        })
    }



    const plants = plantList.map(plant => {
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
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>{plant.plant_name}</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {notes}
                            </Card.Text>
                            <Card.Text>
                                planted on: {plant.planted_on}<br/>
                                sprouted on: {plant.sprouted_on}<br/>
                                flowered on: {plant.flowered_on}<br/>
                            </Card.Text>
                            <Form onSubmit={(event) => handleDateOns(plant.id, plant.garden_id, event)}>
                            <Form.Group className="mb-3" controlId="formPlantMilestones">
                                <Form.Label>Share Milestones</Form.Label>
                                <Form.Control placeholder="Planted On"/>
                                <Form.Control placeholder="Sprouted On"/>
                                <Form.Control placeholder="Flowered On"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>


                        <Form onSubmit={(event) => handleNoteSubmit(plant.id, plant.garden_id, event)}>
                            <Form.Group className="mb-3" controlId="formPlantNote">
                                <Form.Label>Add Note</Form.Label>
                                <Form.Control placeholder="Title"/>
                                <Form.Control placeholder="Description"/>
                                <Form.Control placeholder="Img Url"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Note Submit</Button>
                            </Form>

                        
                            <Button variant="secondary" type="submit"
                            onClick={() => handleDeletePlant(plant.id, plant.garden_id)}>Delete</Button>
                       

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




