import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <Form.Group controlId="checkAnswer">
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    id="switch"
                    checked={!editMode}
                    onChange={() => setEditMode(!editMode)}
                />
                <Form.Control
                    value={name}
                    hidden={editMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setName(event.target.value)
                    }
                />
                <Form.Check
                    type="checkbox"
                    id="checkbox"
                    label="Is a Student?"
                    checked={isStudent}
                    onChange={() => setIsStudent(!isStudent)}
                    hidden={editMode}
                />
            </Form.Group>
            <div>
                {name} is {isStudent ? "a student" : "not a student"}
            </div>
        </div>
    );
}
