import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';

function ItemCard({ itemData, itemId }) {
    // console.log(itemData)

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

    return (
        <div >
            <Card className="item-card" style={{ width: '18rem' }}>
                <ListGroup.Item variant="flush">
                    <p><strong>{itemData.item_name}</strong></p>
                    <span>${itemData.price}</span><br />
                    <span>ethnic category: {itemData.category}</span>
                </ListGroup.Item>
                <button onClick={handleDelete}>Delete</button>
            </Card>
        </div>
    )
}

export default ItemCard