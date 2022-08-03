import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Item from './Item'


const GroceryList = ({handleSubmit}) => {

    
    return (
        <div>
            <h1>groceryList {/*RETURN THE NAME OF THE PARTICULAR LIST */}</h1>
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
                <Button onSubmit={handleSubmit} variant="primary" type="submit">Submit
                </Button>

                <Item handleSubmit={handleSubmit}/>
            </Form>
        </div>
    )
}
export default GroceryList;