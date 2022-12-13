import React, {useState} from "react";
import "./styles/IdeaList.css";
import {ListGroup, ListGroupItem} from "react-bootstrap";

function IdeaList(props){
    const [newIdea, setNewIdea] = useState('');

    function handleChange(e) {
        setNewIdea(e.target.value);
    }

    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleIdeaCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn"
                    onClick={() => props.deleteIdea(props.id)}
                >

                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );

    return (
        <ListGroup>
            <ListGroupItem variant='dark'>{viewTemplate}</ListGroupItem>
        </ListGroup>
    )
}

export default IdeaList;