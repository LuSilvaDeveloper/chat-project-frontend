import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

function Sidebar() {
    const rooms = ["Chat 1", "Chat 2", "Chat 3"];
    return (
        <>
            <h2>Rooms</h2>
            <ListGroup>
                {rooms.map((room, index) => (
                    <ListGroup.Item key={index}>{room}</ListGroup.Item>
                ))}
            </ListGroup>
            <h2>Members</h2>
        </>
    )
}

export default Sidebar;