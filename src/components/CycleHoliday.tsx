import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🧧");
    const transtionByAlphabet: Record<string, string> = {
        "🧧": "🎄",
        "🎄": "🎃",
        "🎃": "🥮",
        "🥮": "🦃",
        "🦃": "🧧"
    };

    const transitionByYear: Record<string, string> = {
        "🧧": "🥮",
        "🥮": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🧧"
    };

    return (
        <div>
            <Button onClick={() => setHoliday(transtionByAlphabet[holiday])}>
                Cycle by Alphabet
            </Button>
            <Button onClick={() => setHoliday(transitionByYear[holiday])}>
                Cycle by Year
            </Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
