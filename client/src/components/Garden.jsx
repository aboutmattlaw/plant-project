import {Card, Row, Col,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Plant from './Plant'
import {useState} from 'react'


function Garden({currentUserGardens, currentUser, getPlantList, plantList, setPlantList}){
    const [viewPlants, setViewPlants] = useState(false)
    
    function handleViewPlants(id) {
       
       if (viewPlants === id) {
           setViewPlants(false)
       } else {
        setViewPlants(id)
       }

       getPlantList(id)
        // fetch(`gardennotes/${id}`)
        // .then(resp => resp.json())
        // .then(data => setPlantList(data))
    }

    const gardens = currentUserGardens.map(garden => {
        return  <>
                    <Card border="primary" key={garden.id}>
                        <Card.Header onClick={() => handleViewPlants(garden.id)}>{garden.garden_name}</Card.Header>
                        <Card.Body>
                            <Card.Title>{garden.garden_name}</Card.Title>
                            <Card.Text>
                                {viewPlants === garden.id ? <Plant gardenId={garden.id} currentUser={currentUser} plantList={plantList} setPlantList={setPlantList}/> : null}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br/>
                </>
    })

    return(
        <Container className="w-75 p-3 mt-5">
            {gardens}
        </Container>
    )
}

export default Garden;