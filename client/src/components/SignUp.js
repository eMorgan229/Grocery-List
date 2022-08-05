import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form';


const SignUp = ({onLogin}) => {
    const history = useNavigate()
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    

    function handleChange(e) {
        const {name, value} = e.target
        console.log(name, value)
        setFormData((formData) => ({...formData, 
            [name]: value}))
    }

    function handleLogin(e) {
        e.preventDefault();
        console.log(formData)
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
            }).then((r) => {
                if (r.ok) {
                    r.json().then((user) => onLogin(user));
            history("/view_grocery_lists")
                } else {
                    r.json().then((err) => setErrors(err.errors));
            }
        })
        setFormData({
            username: "",
            password: ""
        });
        }
    return(
        <div className='form'>
            <video autoplay muted loop id="background-video">
                <source src="kitchen.mp4" type="video/mp4"/>
            </video>
            <Form onSubmit={handleLogin}>
                <h1 className="login">Signup!</h1>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className='form-text'>Enter New Username</Form.Label>
                <Form.Control 
                    placeholder="Enter username" 
                    name="username" 
                    value={formData.username}
                    onChange={handleChange}
                />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='form-text'>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password} 
                    onChange={handleChange}
                />
                <Form.Text className="form-text">
                    Password must be a million characters long...and ONLY contain special characters
                </Form.Text>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button className="button" variant="primary" type="submit">
                Submit
            </Button>
            <br/>
            <br/>
            <span className='form-text'>Need a Grocery List account? <a href="/login">Login</a> here!</span>
        </Form>

        </div>
    )
}
export default SignUp;