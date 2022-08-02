import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react';

const Item = () => {
    
    const [items, setItems] = useState([])
    console.log(items)
    useEffect(()=> {
        fetch('/items')
        .then(r=>r.json())
        .then(setItems)
    }, [])

    // display item cards
    const item = items.map((i)=> {
        return <Card className ="item-card" style={{ width: '18rem'}}>
            <ListGroup.Item variant="flush">
            <p><strong>{i.item_name}</strong></p>
            <span>${i.price}</span><br/>
            <span>ethnic category: {i.category}</span>
            </ListGroup.Item>
            </Card>
    })

    return(
       <>{item}</> 
    )
}

export default Item;