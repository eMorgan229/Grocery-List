import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Item from './Item';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const GroceryList = () => {

    const [itemData, setItemData] = useState({
        list_name: "",
        items: []
    })
    const params = useParams()
    console.log(params)
     console.log(itemData)

    useEffect(()=> {
        fetch(`/grocery_lists/${params.id}`)
        .then(r=>r.json())
        .then(data => setItemData(data))
        
    }, [params.id])
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
            <video autoplay muted loop id="background-video">
                <source src="vegtables.mp4" type="video/mp4"/>
            </video>

            <h1 className="login"> {itemData.list_name}{/*RETURN THE NAME OF THE PARTICULAR LIST */}</h1>
            <Form >
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="form-text">Enter New Grocery Item</Form.Label>
                    <Form.Control type="grocery-item" placeholder="New Grocery Item" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="form-text">Choose Grocery Item</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>{/*ENTER FETCHED LIST OF GROCERY ITEMS HERE */}</option>
                    </Form.Select>
                    </Form.Group>
        
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="form-text">Select A Food Category</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>{/*HARD CODE CATEGORIES */}</option>
                    </Form.Select>
                    </Form.Group>
        
                </Row>
                <Button className="button" onSubmit={console.log("handleSubmit")} variant="primary" type="submit">Submit
                </Button>
                <Item itemData={itemData.items}/>
            </Form>
        </div>
    )
}
export default GroceryList;