import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
<<<<<<< HEAD
import img from "./images/TurtlePic.png";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <h1>Here is a picture of a turtle</h1>
            <div className="Image">
                <img src={img} alt="A picture of a turtle" />
            </div>
            <div className="Ordered-list">
                <ol>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ol>
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div className="Two-columns">
                <Container>
                    <Row>
                        <div className="Column1">
                            <Col>First column.</Col>
                        </div>
                        <div className="Column2">
                            <Col>Second column.</Col>
                        </div>
                    </Row>
                </Container>
            </div>
            <p>Victor Tung</p>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
