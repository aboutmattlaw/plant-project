import {Card, Row, Col,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Garden({currentUserGardens}){

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
    
    const gardens = currentUserGardens.map(garden => {
        return <Card>
                    <Card.Header>{garden.garden_name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{garden.garden_name}</Card.Title>
                        <Card.Text>
                            <Link to="/">link</Link>
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