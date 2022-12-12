import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles/Login.css';
import axios from 'axios';

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const API_endpoint = 'http://localhost:5001/users/login';
  const type = props.requestType;
  const [result, setResult] = useState('');

  async function sendRequest() {
    if (type === 'POST'){
        try {
           
            await axios.post(API_endpoint, {email: email, password: password})
            
            setResult(`New user ${email} added.`)
        } catch(e) {
            setResult('Error: An invalid request has been made')
        }
    }
}

  function handleLogin(e) {
     e.preventDefault();


  }

  return (
    <Container>
      <Row>  
        <Col md={5} className="login__bg"></Col>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">   
          <Form style={{width: '80%', maxWidth: 500}} onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
            </Form.Group>            
            <Button variant="primary" type="submit" onClick={() => sendRequest()}>
              Login
            </Button>
            <div className="py-4">
              <p className="text-center">
                Don't have an account ? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </Form>
        </Col> 
      </Row>
    </Container>
  );
}

export default Login