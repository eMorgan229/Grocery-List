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
           
            <Card className="grocery-list-card" class="shadow p-3 mb-5 bg-white rounded">
                <Card.Body>
                    <Card.Title className="grocery-list-card-name"> {i.list_name}</Card.Title>
                </Card.Body>
                <Card.Link className="link-view-items" onClick={()=> handleClick(i.id)}>click to view items</Card.Link>
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
            <video autoplay muted loop id="background-video">
                <source src="vegtables.mp4" type="video/mp4"/>
            </video>

            <h1 className="login">View All Grocery Lists:</h1>
            <div className="grocery-list-container">
            <div className="grocery-list">
            {list}
            </div>
            <div className="grocery-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className="form-text">Create a New Grocery List</Form.Label>
                <Form.Control 
                    placeholder="Enter Grocery List Name" 
                    name="list_name" 
                    onChange={handleChange}
                    value={formData.list_name} 
                />
                <Button className="button" variant="primary" type="submit">
                Submit
                </Button>
                </Form.Group>
            </Form>
            </div>
            
            </div>

            
        </div>
    )
}
export default ViewAllGroceryLists;