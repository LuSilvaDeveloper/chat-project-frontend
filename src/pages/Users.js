import React, {useState} from "react";
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";

function Users(props) {

    const API_endpoint = 'http://localhost:5001/users/';
    console.log(API_endpoint + 'list');
    const type = props.requestType;
    const [result, setResult] = useState('');
    const [input, setInput] = useState('');
    //<li key={index}>ID: {idea.id} Name: {idea.name} Email:{idea.email}</li>

    async function sendRequest(){
        if(type === 'GET'){
            try {
                const res = await axios.get(API_endpoint + 'list/');
                setResult(res.data.map( (idea, index) => {
                    return (
                        <Container>
                            <Row>
                                <Col>
                                    <li key={index}>
                                        <strong>ID:</strong> {idea.id} <strong>Name:</strong> {idea.name} <strong>Email:</strong> {idea.email}
                                    </li>
                                </Col>
                            </Row>
                        </Container>
                         )

                }))

            } catch(e) {
                setResult('Error: Invalid Request')
            }
        } else if (type === 'GETBYID') {
            try {
                // @todo Make a GET/:id request to API and store the specific task in state
                const res = await axios.get(API_endpoint + input);
                setResult(`
                        id: ${res.data[0].id}, 
                        name: ${res.data[0].name}, 
                        email: ${res.data[0].email}}
                `)
            } catch(e) {
                setResult('Error: An invalid request has been made')
            }
        } else if(type === 'GETBYNAME'){
            try {
                // @todo Make a GET/:id request to API and store the specific task in state
                const res = await axios.get(API_endpoint+'list/'+input);
                setResult(`
                        id: ${res.data[0].id}, 
                        name: ${res.data[0].name}, 
                        email: ${res.data[0].email}}
                `)
            } catch(e) {
                setResult('Error: An invalid request has been made')
            }
        } else if(type === 'GETBYEMAIL'){
            try {
                // @todo Make a GET/:id request to API and store the specific task in state
                const res = await axios.get(API_endpoint+'credentials/'+input);
                setResult(`
                        id: ${res.data[0].id}, 
                        name: ${res.data[0].name}, 
                        email: ${res.data[0].email}}
                `)
            } catch(e) {
                setResult('Error: An invalid request has been made')
            }
        }
    }

    return (
        <Container>
            {type === 'GET' ?
                (
                    <Row>
                        <Col>
                            <h2>{type} HTTP Request</h2>
                            <div>Result from server:
                                <ul>
                                    {result}
                                </ul>
                            </div>
                            <button onClick={() => sendRequest()}>Get list of Users</button>
                        </Col>
                    </Row>
                ) :
                (
                    <Row>
                        <Col>
                            <h2>{type} HTTP Request</h2>
                            <div>Result from server:<p>{result}</p></div>
                            <input type='text' onChange={field => setInput(field.target.value)} />
                            <button onClick={() => sendRequest()}>Submit</button>
                        </Col>
                    </Row>
                )}

        </Container>
    )
}

export default Users;