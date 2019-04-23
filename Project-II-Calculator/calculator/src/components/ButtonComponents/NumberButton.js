import React from 'react';
import './Button.css';


const Numbers = [1,2,3,4,5,6,7,8,9]
const NumberButton = () => {
return (
    <div className = "numbers">
    <div className = "clear">clear</div>
    <div className = "nonzero">
    {Numbers.map(number => {return <div className="number">{number}</div>})}
    </div>
    <div className ="zero">0</div>
    </div>
)
};

export default NumberButton;