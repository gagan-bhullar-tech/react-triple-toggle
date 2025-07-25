import React from 'react';
import { TripleToggleProps } from "./interfaces";

const TripleToggle = (props: TripleToggleProps) => {

    const generateId = (label?: string) => {
        return props.uniqueId ? `${props.uniqueId}-${label}` : label;
    };

    return (
        <div className="container">
        <input type="radio" name="triple-toggle" id={generateId(props.leftLabel)} title={props.leftLabel} />
        <label htmlFor={generateId(props.leftLabel)}>{props.leftLabel}</label>
        <input type="radio" name="triple-toggle" id={generateId(props.centerLabel)} title={props.centerLabel} />
        <label htmlFor={generateId(props.centerLabel)}>{props.centerLabel}</label>
        <input type="radio" name="triple-toggle" id={generateId(props.rightLabel)} title={props.rightLabel} />
        <label htmlFor={generateId(props.rightLabel)}>{props.rightLabel}</label>
        </div>
    );
};

TripleToggle.defaultProps = {
    uniqueId: '',
    leftLabel: 'L',
    centerLabel: 'C',
    rightLabel: 'R'
};

export default TripleToggle;
