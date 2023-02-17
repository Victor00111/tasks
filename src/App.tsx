import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is the header.</h1>
            <img src="C:\Users\Victo\tasks\src\images\TurtlePic.jfif" alt="A picture of a turtle"/>
            <ol>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ol>
            
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p> Victor Tung </p>
            <p> Hello World </p>
        </div>
    );
}

export default App;
