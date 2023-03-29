import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="checkAnswer">
                <h3>Check Answer</h3>
                <Form.Control value={answer} onChange={updateName} />
            </Form.Group>
            {expectedAnswer === answer ? "✔️" : "❌"}
        </div>
    );
}
