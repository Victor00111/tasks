import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select
                value={answer}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    setAnswer(event.target.value)
                }
            >
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            <div>{expectedAnswer === answer ? "✔️" : "❌"}</div>
        </div>
    );
}
