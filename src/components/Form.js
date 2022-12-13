import React, {useState} from "react";
import "./styles/Form.css"
import {Col, Container, Row} from "react-bootstrap";

function Form(props) {
    const [idea, setIdea] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.addIdea(idea);
        setIdea("");
    }

    function handleChange(e) {
        setIdea(e.target.value);
    }

    function handleClear() {
        localStorage.clear();
        props.setIdeas([]);
    }


    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h2 className="label-wrapper">
                                <label htmlFor="new-todo-input" className="label__lg">
                                    What features would you recommend for this project?
                                </label>
                            </h2>

                            <input
                                type="text"
                                id="new-idea-input"
                                className="input input__lg"
                                idea="text"
                                autoComplete="off"
                                value={idea}
                                onChange={handleChange}
                            />
                            <button type="submit" className="btn btn__primary btn__lg">
                                Add
                            </button>
                            <button
                                type="button"
                                className="btn btn__secondary btn__lg"
                                onClick={() => handleClear()}
                            >
                                Clear All Tasks
                            </button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}

export default Form;