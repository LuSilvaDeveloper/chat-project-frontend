import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Row, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./styles/Signup.css";
import robotImg from "../assets/robotImage.jpeg";
import axios from 'axios';
import "../components/SuccessAlert";
import SuccessAlert from "../components/SuccessAlert";
import ErrorAlert from "../components/ErrorAlert";


function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const API_endpoint = 'http://localhost:5001/users/';
    const type = props.requestType;
    const [result, setResult] = useState('');
    const [success, setSuccess] = useState();

    

    async function sendRequest() {
        if (type === 'POST'){
            try {
                await axios.post(API_endpoint, {name: name, email: email, password: password})
                console.log("Everything ok");
                setSuccess(true);
                setResult(`New user ${name} ${email} added.`)
            } catch(e) {
                console.log("An Error ocurred");
                setSuccess(false);
                setResult('Error: An invalid request has been made')

            }
        }
    }


    async function handleSignup(e) {
        e.preventDefault();

    }

    return (
        <Container>
            <Row>
                {success === undefined ?
                (
                    <div></div>
                ) :
                (
                    <div>
                        {success ? <SuccessAlert name={name} email={email} setSuccess={setSuccess}/> : <ErrorAlert email={email} setSuccess={setSuccess}/>}
                    </div>
                )
                    }
                <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                    <Form style={{width: "80%", maxWidth: 500}} onSubmit={handleSignup}>
                        <h1 className="text-center">Create account</h1>
                        <div className="signup-profile-pic__container">
                            <img src={robotImg} className="signup-profile-pic"/>
                            <label htmlFor="image-upload" className="image-upload-label">
                                <i className="fas fa-plus-circle add-picture-icon"></i>
                            </label>
                            <input type="file" id="image-upload" hidden accept="image/png, image/jpeg"
                                   />
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)}
                                          value={name}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                          onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                          onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={() => sendRequest()}>
                            Sign up
                        </Button>
                        <div className="py-4">
                            <p className="text-center">
                                Already have an account ? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </Form>
                </Col>
                <Col md={5} className="signup__bg"></Col>
            </Row>
        </Container>
    )
}

export default Signup