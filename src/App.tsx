import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import img from "./images/TurtlePic.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is the header.</h1>
            <h2>Also, here is a picture of a turtle.</h2>
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
        </div>
    );
}

export default App;
