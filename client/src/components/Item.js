import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react';

const Item = () => {
    
    const [itemData, setItemData] = useState([])
    // console.log(itemData)
    useEffect(()=> {
        fetch('/items')
        .then(r=>r.json())
        .then(setItemData)
    }, [])

    // display item cards
    const item = itemData.map((i)=> {
        return (
            <Card className ="item-card" style={{ width: '18rem'}}>
                <ListGroup.Item variant="flush">
                <p key={i.id}><strong>{i.item_name}</strong></p>
                <span>${i.price}</span><br/>
                <span>ethnic category: {i.category}</span>
                </ListGroup.Item>
                <button onClick={console.log('handledelete')}>delete</button>
            </Card>
        )
    })

    // const itemDelete = (i) => {


        
    //     // if(itemData.find(id) !==i.id)
    //     // setItemData(itemData) 
    //     // console.log ('find')
    // }

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

    return(
       <div className='container'>{item}</div> 
    )
}

export default Item;