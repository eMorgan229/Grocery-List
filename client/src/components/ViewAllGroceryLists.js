import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router';
import {useState} from 'react'

const ViewAllGroceryLists = ({lists, onAddList, user}) => {
    const [formData, setFormData] = useState({
        list_name: ""
    });
const [selectedList, setSelectedList] = useState({
    id:"",
    list_name: "",
    
})
const navigate = useNavigate()
// const [groceryList, setGroceryListe] = useState({})

function handleClick(id) {
    navigate(`/grocery_lists/${id}`)
}
    const list = lists.map((i)=> {
console.log(i.id)
        return (
           
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> {i.list_name}</Card.Title>
                </Card.Body>
                <Card.Link  onClick={()=> handleClick(i.id)}>view items</Card.Link>
            </Card>
            
        ) 
        
    })

    function handleChange(e) {
        const {name, value} = e.target
        console.log(name, value)
        console.log(user.id)
        setFormData((formData) => ({...formData,
            [name]: value,
            user_id: user.id
        }))
    }
    console.log(formData)
 function handleSubmit(e) {
    e.preventDefault();
    fetch("/grocery_lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((groceryList) => {
        setFormData("");
        onAddList(groceryList);
      });
      setFormData({
        list_name: ""
      })
  }
  console.log(user.id)
 
    return(
        <div>
            <h1>View All Grocery Lists</h1>
            
            <div className="grocery-list">
            {list}
            </div>
            <div className="grocery-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Create a New Grocery List</Form.Label>
                <Form.Control 
                    placeholder="Enter Grocery List Name" 
                    name="list_name" 
                    onChange={handleChange}
                    value={formData.list_name} 
                />
                <Button variant="primary" type="submit">
                Submit
                </Button>
                </Form.Group>
            </Form>
            </div>

            
        </div>
    )
}
export default ViewAllGroceryLists;