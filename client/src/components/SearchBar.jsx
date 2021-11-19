import {
    Container,
    Card,
    Row,
    Col,
    Form,
    Button,
    Image
} from 'react-bootstrap'
import {useState} from 'react'


function SearchBar({setSearchBar, searchBar, onSearch}) {

    function handleSearch(e) {
        setSearchBar(e.target.value)
        onSearch()
    }

    return (
        <Container>
                <br/>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicGardenName">
                        <Form.Label>Plant Search</Form.Label>
                        <Form.Control value={searchBar} onChange={handleSearch} placeholder="Enter Plant Name" />
                    </Form.Group>
                </Form>
        </Container> 
    )
}

export default SearchBar