import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "blue",
        "green",
        "purple",
        "yellow",
        "cyan",
        "red",
        "pink",
        "orange"
    ];
    const [chosenColor, setChosenColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <Form.Check
                    inline
                    label={color}
                    key={color}
                    type="radio"
                    checked={chosenColor === color}
                    value={color}
                    onChange={(event) => setChosenColor(event.target.value)}
                    style={{ backgroundColor: color }}
                />
            ))}
            <div>
                Your chosen color is{" "}
                <Form.Label
                    style={{ backgroundColor: chosenColor }}
                    data-testid="colored-box"
                >
                    {chosenColor}
                </Form.Label>
            </div>
        </div>
    );
}
