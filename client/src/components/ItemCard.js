import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ItemCard({ itemData, itemId }) {
const [check, setCheck] = useState(false)

    console.log(itemData)

    function getData(){
        fetch(`/items`)
        .then(res => res.json())
    }

    useEffect(() => {
        getData()
    })

    const handleDelete = (e) => {
        e.preventDefault()
        fetch(`/items/${itemId}`, {
            method: 'DELETE'
        })
            .then(r => r.json())
            .then(getData())
    }

    function handleCheck() {
        setCheck(!check)
    }
    console.log(check)

    return (
        <div >
            <Card className="item-card" style={{ width: '18rem' }}>
                <ListGroup.Item variant="flush">
                    <p><strong>{itemData.item_name}</strong></p>
                    <span>${itemData.price}</span><br />
                    <span>ethnic category: {itemData.category}</span>
                </ListGroup.Item>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check Item off List!" onClick={handleCheck}/>
                </Form.Group>
                <Button variant="primary" type="delete" onClick={handleDelete}>
                Delete
                </Button>
            </Card>
        </div>
    )
}

export default ItemCard