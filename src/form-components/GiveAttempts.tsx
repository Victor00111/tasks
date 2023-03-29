import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    return (
        <div>
            <Form.Group controlId="giveAttempts">
                <h3>Give Attempts</h3>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft === 0}
            >
                Use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(attemptsLeft + attemptsRequested)
                }
            >
                Gain
            </Button>
            <div>Attempts Left: {attemptsLeft}</div>
        </div>
    );
}
