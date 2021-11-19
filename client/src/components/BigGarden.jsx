import {Row, Button, Container, Form } from "react-bootstrap"
import CreateGarden from "./CreateGarden"
import Garden from "./Garden"
import Navigation from "./Navigation"
import {Routes, Route} from 'react-router-dom'
import Plant from "./Plant"
import {useEffect, useState} from 'react'

function BigGarden({setCurrentUser, currentUser, setCurrentUserGardens, currentUserGardens}) {
    const [plantList, setPlantList] = useState([])
    const [communityPlants, setCommunityPlants] = useState([])
    const [gardenFormData, setGardenFormData] = useState({garden_name: ''})


    useEffect(() => {
        fetch('/plants')
        .then(resp => resp.json())
        .then(data => setCommunityPlants(data))
    }, [])
    
    function getPlantList(id) {
        fetch(`gardennotes/${id}`)
        .then(resp => resp.json())
        .then(data => setPlantList(data))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setGardenFormData({garden_name: ''})
        const obj = {
            "garden_name": event.target[0].value,
            "user_id": currentUser.id 
        }
       
        fetch('/gardens', {
            method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => {
            setCurrentUserGardens(value => value = [...currentUserGardens, data])
        })
    }
    
    function handleGardenChange(event) {
        setGardenFormData({
            ...gardenFormData,
            [event.target.name]: event.target.value
        })
    }

   
    return(  
        <>
            <Navigation currentUser={currentUser} setCurrentUser={setCurrentUser} setCurrentUserGardens={setCurrentUserGardens} />
            <br/>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicGardenName">
                        <Form.Label>Garden Name</Form.Label>
                        <Form.Control onChange={handleGardenChange} name="garden_name" value={gardenFormData.garden_name} placeholder="Enter Garden Name" />
                    </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>

            <Routes> 
                <Route path="/home" element={<Garden setPlantList={setPlantList} plantList={plantList} getPlantList={getPlantList} currentUser={currentUser} setCurrentUserGardens={setCurrentUserGardens} currentUserGardens={currentUserGardens} />} />
                <Route path="/communityplants" element={<Plant plantList={communityPlants} setPlantList={setCommunityPlants} currentUser={currentUser} />} />
            </Routes>
        </>
    )
}

export default BigGarden