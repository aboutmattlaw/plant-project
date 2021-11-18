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


    function handleDateOns(event, gardenData) {
        event.preventDefault()
        const obj = {
            "planted_on": event.target[0].value,
            "sprouted_on": event.target[1].value,
            "flowered_on": event.target[2].value
        }

        // can't figure out how to dynamically generate the id for the fetch below... `/plants/${plant.plant_id}`

        fetch(`/plants/4`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(data => console.log(data))
    }


    function handleDeletePlant(event) {

        fetch(`/plants/4`, {
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
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{plant.plant_name}</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {notes}
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
        </>
     )
 }

export default Plant
