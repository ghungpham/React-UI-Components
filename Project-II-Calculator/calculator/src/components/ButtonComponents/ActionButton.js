import React from 'react';
import './Button.css';

const actions = ["÷", "x", "+", "-", "="];
const ActionButton = () => {
    return (
        <div className = "actionbuttons">
        {actions.map(action => { return <div className ="action">{action}</div>})}
        </div>
)
};

export default ActionButton;