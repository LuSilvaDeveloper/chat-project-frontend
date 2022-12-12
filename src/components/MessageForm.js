import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./styles/MessageForm.css";

function MessageForm() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <div className="messages-output"></div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={11}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Your Message"></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={1}>
                        <Button variant="primary" type="submit" style={{width: "100%", backgroundColor: "orange"}}>
                            <i className="fas fa-paper-place"></i>
                        </Button>
                    </Col>
                </Row>
            </Form>

        </div>
    )
}

export default MessageForm;