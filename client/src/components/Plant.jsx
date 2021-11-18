 import {Card, Row, Col, Form, Button} from 'react-bootstrap'
 
 function Plant({gardenData, viewPlants, plantNotes, setGardenData, currentUser}) {



    function handlePlantSubmit(event) {
        event.preventDefault()
        const obj = {
            "plant_name": event.target[0].value,
            "garden_id": gardenData.id 
        }
       
        fetch('/plants', {
            method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => console.log(data)   )}
    


    function handleDateOns(event, gardenData) {
        event.preventDefault()
        const obj = {
            "planted_on": event.target[0].value,
            "sprouted_on": event.target[1].value,
            "flowered_on": event.target[2].value,
        }

// can't figure out how to dynamically generate the id for the fetch below... 

        fetch(`/plants/1`, {
            method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => console.log(data)   )}



    


    // const arrayOfGardenPlants = gardenData.filter(plant => plant.garden_id === viewPlants)
    console.log('gardenData', gardenData)
    console.log('gardenData.plants', gardenData.plants)
    
        
    const notes = plantNotes.map(note => {
        return (
            <Col>
                <Card>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                    <Card.Title>{gardenData.plant_name}</Card.Title>
                    <Card.Text>
                        {note.note_description}
                        {gardenData.planted_on}
                        {gardenData.sprouted_on}
                        {gardenData.flowered_on}
                    </Card.Text>


                    <Form onSubmit={handleDateOns}>
                <Form.Group className="mb-3" controlId="formPlantMilestones">
                    <Form.Label>Share Milestones</Form.Label>
                    <Form.Control placeholder="Planted On" />
                    <Form.Control placeholder="Sprouted On" />
                    <Form.Control placeholder="Flowered On" />
                </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
            </Form>

                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return(
        <>
        <Row xs={1} md={2} className="g-4">
        {notes}


        <Form onSubmit={handlePlantSubmit}>
                <Form.Group className="mb-3" controlId="formPlantName">
                    <Form.Label>Add Plant</Form.Label>
                    <Form.Control placeholder="Enter Plant Name" />
                </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
            </Form>




        {/* <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>{gardenData.plant_name}</Card.Title>
                        <Card.Text>
                            "Txt"
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> */}
        </Row>
        </>
     )
 }

 export default Plant