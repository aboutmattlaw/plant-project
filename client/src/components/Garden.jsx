import {Card, Row, Col,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Plant from './Plant'
import {useState} from 'react'


function Garden({currentUserGardens, currentUser}){
    const [viewPlants, setViewPlants] = useState(false)
    const [gardenData, setGardenData] = useState({})
    const [plantNotes, setPlantNotes] = useState([])
    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const obj = {
    //         "garden_name": event.target[0].value,
    //         "user_id": event.target[0].value// placeholder - how do you get / send this along? 
    //     }
    //     console.log('Body Object', obj)
    //     fetch('/gardens', {
    //         method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(obj)
    //     })
    //     .then(resp => resp.json())
    //     .then(data => console.log('New Garden', data))
    // }
    
    function handleViewPlants(id) {
       
        setViewPlants(id)
        
        fetch(`/gardens/${id}`)
        .then(resp => resp.json())
        .then(data => { 
            setGardenData(data)
        }) 

        fetch(`gardennotes/${id}`)
        .then(resp => resp.json())
        .then(data => setPlantNotes(data))
    }

    const gardens = currentUserGardens.map(garden => {
        let show
        
        if (viewPlants === garden.id) {
            show = true
        } else {
            show = false
        }
        
        return <Card onClick={() => handleViewPlants(garden.id)} key={garden.id}>
                    <Card.Header>{garden.garden_name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{garden.garden_name}</Card.Title>
                        <Card.Text>
                            {/* <Plant gardenData={gardenData}/> */}
                            {show ? <Plant gardenData={gardenData} viewPlants={viewPlants} currentUser={currentUser} plantNotes={plantNotes}/> : null}
                        </Card.Text>
                    </Card.Body>
                </Card>
    })

    return(
        <Container className="w-75 p-3 mt-5">
            {gardens}
        </Container>
    )
}

export default Garden;