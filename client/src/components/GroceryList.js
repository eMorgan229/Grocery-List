import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Item from './Item';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const GroceryList = () => {

    const [itemData, setItemData] = useState({
        list_item: "",
        items: []
        }
    )
    const {id} = useParams()
    console.log(id)

    useEffect(()=> {
        fetch(`/grocery_lists/${id}`)
        .then(r=>r.json())
        .then(data => {
            setItemData(data)
        })
    }, [id])

     // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const product = {
    //         item_name,
    //         price,
    //         category
    //     }

    //     fetch('/list_items',{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(product)
    //     })
    // }

    
    return (
        <div>
            <h1>{itemData.list_item}</h1>
            <Form >
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Enter New Grocery Item</Form.Label>
                    <Form.Control type="email" placeholder="New Grocery Item" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Choose Grocery Item</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>{/*ENTER FETCHED LIST OF GROCERY ITEMS HERE */}</option>
                    </Form.Select>
                    </Form.Group>
        
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Select A Food Category</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>{/*HARD CODE CATEGORIES */}</option>
                    </Form.Select>
                    </Form.Group>
        
                </Row>
                <Button onSubmit={console.log("handleSubmit")} variant="primary" type="submit">Submit
                </Button>
                <Item itemData={itemData.items}/>
            </Form>
        </div>
    )
}
export default GroceryList;