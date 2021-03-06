import React, { useState, ChangeEvent } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { LabelVariant } from "@fremtind/jkl-core";
import { TextArea } from "../src";

export function TextAreaExample({ choiceValues, boolValues }: ExampleComponentProps) {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);
    const inverted = boolValues && boolValues["Invertert"];
    const compact = boolValues && boolValues["Kompakt"];
    const autoExpand = boolValues && boolValues["Ekspanderende"];
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Help label" : undefined;
    const errorLabel = boolValues && boolValues["Med feilmelding"] ? "Error label" : undefined;

    return (
        <TextArea
            variant={variant}
            inverted={inverted}
            forceCompact={compact}
            placeholder="Placeholder"
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            className="jkl-spacing--top-2"
            label="Skriv noe her"
            autoExpand={autoExpand}
            value={value}
            onChange={handleChange}
            onKeyDown={() => console.log("onKeyDown event")}
        />
    );
}
