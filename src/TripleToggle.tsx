import React from 'react';
import { TripleToggleProps } from "./interfaces";
import './TripleToggle.css';

const TripleToggle = (props: TripleToggleProps) => {
    const [switchPosition, setSwitchPosition] = React.useState('left');
    const [animation, setAnimation] = React.useState('');

    const generateId = (label?: string) => {
        return props.id ? `${props.id}-${label}` : label;
    };

    const getSwitchAnimation = (value: string) => {
        let animation = '';
        if (value === "center" && switchPosition === "left") {
            animation = "left-to-center";
        } else if (value === "right" && switchPosition === "center") {
            animation = "center-to-right";
        } else if (value === "center" && switchPosition === "right") {
            animation = "right-to-center";
        } else if (value === "left" && switchPosition === "center") {
            animation = "center-to-left";
        } else if (value === "right" && switchPosition === "left") {
            animation = "left-to-right";
        } else if (value === "left" && switchPosition === "right") {
            animation = "right-to-left";
        }
        props.onChange(value);
        setSwitchPosition(value);
        setAnimation(animation);
    };

    return (
        <div className="main-container">
            <div className={`switch ${animation} ${switchPosition}-position`}></div>
            <input
                defaultChecked
                onChange={(e) => getSwitchAnimation(e.target.value)}
                name="map-switch"
                id={generateId('left')}
                type="radio"
                placeholder='Left'
                value={props.left.value}
            />
            <label
                className={`left-label ${
                    switchPosition === "left" && "purple-font"
                }`}
                htmlFor="left"
            >
                <h4>{props.left.label}</h4>
            </label>

            <input
                onChange={(e) => getSwitchAnimation(e.target.value)}
                name="map-switch"
                id={generateId('center')}
                type="radio"
                placeholder='Center'
                value={props.center.value}
            />
            <label
                className={`center-label ${
                    switchPosition === "center" && "purple-font"
                }`}
                htmlFor="center"
            >
                <h4>{props.center.label}</h4>
            </label>

            <input
                onChange={(e) => getSwitchAnimation(e.target.value)}
                name="map-switch"
                id={generateId('right')}
                type="radio"
                placeholder='Right'
                value={props.right.value}
            />
            <label
                className={`right-label ${
                    switchPosition === "right" && "purple-font"
                }`}
                htmlFor="right"
            >
                <h4>{props.right.label}</h4>
            </label>
      </div>
    );
};

TripleToggle.defaultProps = {
    id: undefined,
    left: {
        label: 'Left',
        value: 'left'
    },
    center: {
        label: 'Center',
        value: 'center'
    },
    right: {
        label: 'Right',
        value: 'right'
    }
};

export default TripleToggle;
