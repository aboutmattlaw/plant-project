import {Card, Row, Col,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Plant from './Plant'
import {useState} from 'react'


function Garden({currentUserGardens, currentUser}){
    const [viewPlants, setViewPlants] = useState(false)
    const [gardenData, setGardenData] = useState({})
    const [plantList, setPlantList] = useState([])
    const [showPlant, setShowPlant] = useState(false)
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
       
       if (viewPlants === id) {
           setViewPlants(false)
       } else {
        setViewPlants(id)
       }

        
        fetch(`/gardens/${id}`)
        .then(resp => resp.json())
        .then(data => { 
            setGardenData(data)
        }) 

        fetch(`gardennotes/${id}`)
        .then(resp => resp.json())
        .then(data => setPlantList(data))
    }

    const gardens = currentUserGardens.map(garden => {
        
        
        // if (viewPlants === garden.id) {
        //     setShowPlant(true)
        // } else {
        //     setShowPlant(false)
        // }

        
        return  <>
                    <Card border="primary" key={garden.id}>
                        <Card.Header onClick={() => handleViewPlants(garden.id)}>{garden.garden_name}</Card.Header>
                        <Card.Body>
                            <Card.Title>{garden.garden_name}</Card.Title>
                            <Card.Text>
                                {/* <Plant gardenData={gardenData}/> */}
                                {viewPlants === garden.id ? <Plant gardenData={gardenData} viewPlants={viewPlants} currentUser={currentUser} plantList={plantList} setPlantList={setPlantList}/> : null}
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