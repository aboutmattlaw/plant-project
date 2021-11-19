import {
    Container,
    Card,
    Row,
    Col,
    Form,
    Button,
    Image,
    Accordion
} from 'react-bootstrap'
import {useState} from 'react'
import SearchBar from './SearchBar'

function Plant({plantList, currentUser, setPlantList, gardenId}) {

    const [searchBar, setSearchBar] = useState('')
    // State For Forms

    const [plantFormData, setPlantFormData] = useState({plant_name: '', plant_image_url: ''})

    const [noteFormData, setNoteFormData] = useState({note_title: '', note_description: '', note_image_url: ''})

    const [dateOnsFormData, setDateOnsFormData] = useState({planted_on: '', sprouted_on: '', flowered_on: ''})


    // Form Changers

    function handlePlantChange(event) {
        setPlantFormData({
            ...plantFormData,
            [event.target.name]: event.target.value
        })
    }

    function handleNoteChange(event) {
        setNoteFormData({
            ...noteFormData,
            [event.target.name]: event.target.value
        })
    }

    function handleDateOnsChange(event) {
        setDateOnsFormData({
            ...dateOnsFormData,
            [event.target.name]: event.target.value
        })
    }

    // Plant Submit Function


    function onSearch() {
        setPlantList(plantList.filter(plant => {
            return plant.plant_name.includes(searchBar)
        }))
    }

    function handlePlantSubmit(event) {
        event.preventDefault()
        setPlantFormData({plant_name: '', plant_image_url: ''})
        const obj = {
            "plant_name": event.target[0].value,
            "garden_id": gardenId,
            "plant_image_url": event.target[1].value
        }

        fetch('/plants', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(data => {
            fetch(`gardennotes/${
                data.garden_id
            }`).then(resp => resp.json()).then(data => setPlantList(data))
        })
    }


    // Note Submit Function

    function handleNoteSubmit(plant_id, gardenId, event) {
        event.preventDefault()
        setNoteFormData({note_title: '', note_description: '', note_image_url: ''})
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
            if (resp.ok) {
                fetch(`gardennotes/${gardenId}`).then(resp => resp.json()).then(data => setPlantList(data))
            } else {
                console.log("error!")
            }
        }))
    }


    // Date Ons Function

    function handleDateOns(id, gardenId, event) {
        event.preventDefault()
        setDateOnsFormData({planted_on: '', sprouted_on: '', flowered_on: ''})
        const obj = {
            "planted_on": event.target[0].value,
            "sprouted_on": event.target[1].value,
            "flowered_on": event.target[2].value
        }


        fetch(`/plants/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => {
            if (resp.ok) {
                fetch(`gardennotes/${gardenId}`).then(resp => resp.json()).then(data => setPlantList(data))
            } else {
                console.log("error!")
            }
        })
    }


    // Delete Plant

    function handleDeletePlant(id, gardenId) {

        fetch(`/plants/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => {
            fetch(`gardennotes/${gardenId}`).then(resp => resp.json()).then(data => setPlantList(data))
        })
    }


    const plants = plantList.map(plant => {
        const notes = plant.notes.map(note => {
            return (
                <div key={
                    note.id
                }>
                    {
                    note.note_title
                }
                    <br/>
                    {
                    note.note_description
                }
                    <br/>
                    <Image src={
                            note.image_url
                        }
                        width="225px"></Image>
                    <br/>
                </div>
            )
        })

        if (gardenId) {
            return (
                <Col key={
                    plant.id
                }>
                    <Card>
                        <Image src={
                            plant.plant_image_url
                        }></Image>
                        <Card.Body>
                            <Card.Title>{
                                plant.plant_name
                            }</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card>

                        <Accordion>

                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Milestones</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text>
                                        planted on: {
                                        plant.planted_on
                                    }<br/>
                                        sprouted on: {
                                        plant.sprouted_on
                                    }<br/>
                                        flowered on: {
                                        plant.flowered_on
                                    }<br/>
                                        <Form onSubmit={
                                            (event) => handleDateOns(plant.id, plant.garden_id, event)
                                        }>
                                            <Form.Group className="mb-3" controlId="formPlantMilestones">
                                                <Form.Label>Share Milestones</Form.Label>
                                                <Form.Control onChange={handleDateOnsChange}
                                                    name="planted_on"
                                                    value={
                                                        dateOnsFormData.planted_on
                                                    }
                                                    placeholder="Planted On"/>
                                                <Form.Control onChange={handleDateOnsChange}
                                                    name="sprouted_on"
                                                    value={
                                                        dateOnsFormData.sprouted_on
                                                    }
                                                    placeholder="Sprouted On"/>
                                                <Form.Control onChange={handleDateOnsChange}
                                                    name="flowered_on"
                                                    value={
                                                        dateOnsFormData.flowered_on
                                                    }
                                                    placeholder="Flowered On"/>
                                            </Form.Group>
                                            <Button variant="primary" type="submit">Submit</Button>
                                        </Form>

                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Notes</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text> {notes}
                                        <Form onSubmit={
                                            (event) => handleNoteSubmit(plant.id, plant.garden_id, event)
                                        }>
                                            <Form.Group className="mb-3" controlId="formPlantNote">
                                                <Form.Label>Add Note</Form.Label>
                                                <Form.Control onChange={handleNoteChange}
                                                    name="note_title"
                                                    value={
                                                        noteFormData.note_title
                                                    }
                                                    placeholder="Title"/>
                                                <Form.Control placeholder="Description" onChange={handleNoteChange}
                                                    name="note_description"
                                                    value={
                                                        noteFormData.note_description
                                                    }/>
                                                <Form.Control placeholder="ImgUrl" onChange={handleNoteChange}
                                                    name="note_image_url"
                                                    value={
                                                        noteFormData.note_image_url
                                                    }/>
                                            </Form.Group>
                                            <Button variant="primary" type="submit">Note Submit</Button>
                                        </Form>


                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                        <Card.Body>

                            <Button variant="secondary" type="submit"
                                onClick={
                                    () => handleDeletePlant(plant.id, plant.garden_id)
                            }>Delete Plant</Button>

                        </Card.Body>
                    </Card>
                </Col>
            )
        } else {
            const comments = plant.comments.map(comment => {
                return (
                    <Card.Text key={
                        comment.id
                    }>
                        User: {
                        comment.user_id
                    }
                        <br/>
                        Comment Title: {
                        comment.comment_title
                    }
                        <br/>
                        Comment Description: {
                        comment.comment_description
                    } </Card.Text>
                )
            })
            return (
                <Col>
                    <Card>
                        <Image src={
                            plant.plant_image_url
                        }></Image>

                        <Card.Body>
                            <Card.Title>{
                                plant.plant_name
                            }</Card.Title>
                            {comments} </Card.Body>
                        <Button>Add Comment</Button>
                    </Card>
                </Col>
            )
        }
    })

    return (
        <> {
            !gardenId ? <SearchBar setSearchBar={setSearchBar}
                searchBar={searchBar}
                onSearch={onSearch}/> : null
        }

            <Row xs={1}
                md={2}
                className="g-4">
                {plants} </Row>

            {
            gardenId ? <Row>
                <Form onSubmit={handlePlantSubmit}>
                    <Form.Group className="mb-3" controlId="formPlantName">
                        <Form.Control onChange={handlePlantChange}
                            name="plant_name"
                            value={
                                plantFormData.plant_name
                            }
                            placeholder="Add Plant Name"/>
                        <Form.Control onChange={handlePlantChange}
                            name="plant_image_url"
                            value={
                                plantFormData.plant_image_url
                            }
                            placeholder="Plant Image URL"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Row> : null
        } </>
    )
}

export default Plant
