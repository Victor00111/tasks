import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1Value, setd1Value] = useState<number>(1);
    const [d2Value, setd2Value] = useState<number>(2);

    return (
        <div>
            <span data-testid="left-die">
                <Button onClick={() => setd1Value(d6())}>Roll Left</Button>
                <div>{d1Value}</div>
            </span>
            <span data-testid="right-die">
                <Button onClick={() => setd2Value(d6())}>Roll Right</Button>
                <div>{d2Value}</div>
            </span>
            {d2Value === 1 && d1Value === 1 && <div>Lose</div>}
            {d1Value === d2Value && d1Value !== 1 && <div>Win</div>}
        </div>
    );
}
