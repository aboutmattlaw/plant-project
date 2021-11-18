 import {Card, Row, Col} from 'react-bootstrap'
 
 function Plant({gardenData, viewPlants, plantNotes}) {

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
                    <Card.Text>
                        {notes}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return(
        <>
            <Row xs={1} md={2} className="g-4">
                {plants}
            </Row>
        </>
     )
 }

 export default Plant