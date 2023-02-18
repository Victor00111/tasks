import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is the header.</h1>
            <img
                src="C:\Users\Victo\tasks\src\images\TurtlePic.jfif"
                alt="A picture of a turtle"
            />
            <ol>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div className="2-columns">
                <Container>
                    <Row>
                        <div className="red-columns">
                            <Col>First column.</Col>
                            <Col>Second column.</Col>
                        </div>
                    </Row>
                </Container>
            </div>
            <p>Victor Tung</p>
        </div>
    );
}

export default App;
