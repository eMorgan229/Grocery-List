import Card from 'react-bootstrap/Card';

const ViewAllGroceryLists = ({lists}) => {

    const list = lists.map((i)=> {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title> {i.list_name}</Card.Title>
                </Card.Body>
                <Card.Link href='#'>view items{/*redirect to list of items*/}</Card.Link>
            </Card>
        ) 
    })
    
    return(
        <div>
            <h1>View All Grocery Lists</h1>
            {list}
        </div>
    )
}
export default ViewAllGroceryLists;