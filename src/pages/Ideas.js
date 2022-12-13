import React, {useEffect, useRef, useState} from 'react'
import {nanoid} from "nanoid";
import IdeaList from "../components/IdeaList";
import Form from "../components/Form";
import "./styles/Ideas.css"
import {Col, Container, Row} from "react-bootstrap";

const FILTER_BUTTONS = {
  All: () => true,
  Active: (idea) => !idea.completed,
  Completed: (idea) => idea.completed
};

function Ideas(props) {

  const [ideas, setIdeas] = useState([]);
  const [filter, setFilter] = useState('All');

    useEffect(() => {
        const data = localStorage.getItem('listOfIdeas');
        if (data) {
            setIdeas(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('listOfTasks', JSON.stringify(ideas));
    }, [ideas]);

  function addIdea(name) {
    const newIdea = {id: `idea-${nanoid()}`, name, completed:false};
    setIdeas([...ideas, newIdea]);
  }

  function toggleIdeaCompleted(id) {
    const updatedIdea = ideas.map((idea) => {
      if (id === idea.id) {
        return {...idea, completed: !idea.completed}
      }
      return idea;
    });
    setIdeas(updatedIdea);
  }

  function deleteIdea(id){
    const remainingIdeas = ideas.filter((idea) => id !== idea.id);
    setIdeas(remainingIdeas);
  };

  const ideaList = ideas.filter(FILTER_BUTTONS[filter]).map((idea) => (
      <IdeaList
          id={idea.id}
          name={idea.name}
          completed={idea.completed}
          key={idea.id}
          toggleIdeaCompleted={toggleIdeaCompleted}
          deleteIdea={deleteIdea}
      />
  ));

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

  const ideasNoun = ideaList.length !== 1 ? 'Project Ideas' : 'Project Idea'
  const heading = `${ideaList.length} ${ideasNoun} remaining`
  const headingRef = useRef(null);
  const previousLength = usePrevious(ideas.length);
  useEffect(() => {
      if (ideas.length - previousLength === -1) {
          headingRef.current.focus();
      }
  }, [ideas.length, previousLength])


  return (
      <Container fluid>
          <Row>
              <Col>
                  <div className="chatapp stack-large">
                  <h1>Project Ideas</h1>
                  <Form
                      addIdea={addIdea}
                      setIdeas={setIdeas}
                  />
                  <h2 id="list-heading" tabIndex="-1" ref={headingRef}>
                      {heading}
                  </h2>
                  <ul
                      role="list"
                      className="todo-list stack-large stack-exception"
                      aria-labelledby="list-heading"
                  >
                      {ideaList}
                  </ul>

                </div>
              </Col>
          </Row>
      </Container>

  )
}

export default Ideas;