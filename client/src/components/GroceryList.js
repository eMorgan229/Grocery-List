import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Item from './Item';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GroceryList = () => {

    const [itemData, setItemData] = useState({
        list_name: "",
        items: []
    })
    const params = useParams()
    const [item_name, setItemName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    
    useEffect(() => {
        fetch(`/grocery_lists/${params.id}`)
            .then(r => r.json())
            .then(data => setItemData(data))
    }, [params.id])

   
    const handleAddItem = (e) => {
        e.preventDefault()
        fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item_name, price, category
            })
        })
    }

    return (
        <div>
            <h1> {itemData.list_name}{/*RETURN THE NAME OF THE PARTICULAR LIST */}</h1>
            <Form  onSubmit={handleAddItem}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Enter New Grocery Item</Form.Label>
                        <Form.Control onChange={(e) => setItemName(e.target.value)} type="grocery-item" placeholder="New Grocery Item" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Choose Grocery Item</Form.Label>
                        <Form.Select onChange={(e) => setPrice(e.target.value)} defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>{/*ENTER FETCHED LIST OF GROCERY ITEMS HERE*/} Hello</option>
                        </Form.Select>
                    </Form.Group>

                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Select A Food Category</Form.Label>
                        <Form.Select onChange={(e) => setCategory(e.target.value)} defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>{/*HARD CODE CATEGORIES */} Hello</option>
                        </Form.Select>
                    </Form.Group>

                </Row>
                <Button variant="primary" type="submit">Submit
                </Button>
            </Form>
            <Item itemData={itemData.items} />
        </div>
    )
}
export default GroceryList;