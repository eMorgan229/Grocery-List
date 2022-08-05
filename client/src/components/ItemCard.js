import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useParams} from 'react-router-dom';

function ItemCard({ itemData, itemId }) {
const [check, setCheck] = useState(false)
const params = useParams()
    console.log(params)

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
        fetch(`/remove`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                item_id: itemData.id,
                grocery_list_id: params.id

        })
            // .then(r => r.json())
            // .then(getData())
        })
    }
    

    function handleCheck(e) {
        console.log(e)
        console.log(check)
        setCheck((check) => !check)
        console.log(check)
        fetch(`/list_items/${e.target.id}`, {
            method: "PATCH",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                checked: check,
                item_name: e.target.item_name
            })
        })
    }
    console.log(check)

    
    return (
        <div >
            <Card className="item-card" style={{ width: '18rem' }}>
                <ListGroup.Item variant="flush">
                    <p><strong className="grocery-list-card-name">{itemData.item_name}</strong></p>
                    <span>${itemData.price}</span><br />
                    <span>ethnic category: {itemData.category}</span>
                </ListGroup.Item>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check Item off List!" onClick={handleCheck}
                id={itemData.id}
                />
                </Form.Group>
                <Button className="button" variant="primary" type="delete" onClick={handleDelete}>
                Delete
                </Button>
            </Card>
        </div>
    )
}

export default ItemCard