 import {Card, Row, Col} from 'react-bootstrap'
 
 function Plant({gardenData, viewPlants, plantNotes}) {

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
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return(
        <>
        <Row xs={1} md={2} className="g-4">
        {notes}
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