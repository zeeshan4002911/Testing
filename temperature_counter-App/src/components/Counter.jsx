import React, { useState } from "react";

const Counter = () => {
    const [temp, setTemp] = useState(0);
    const [color, setColor] = useState("skyblue");
    const colorFn = () => {
        if (temp < 20) setColor("skyblue");
        if (temp > 20) setColor("#ebd287");
        if (temp > 50) setColor("orange");
        if (temp > 70) setColor("red");
    }
    return (
        <div className="counter">
            <div className="circle" style={{ backgroundColor: `${color}` }}>{temp}&#8451;</div>
            <div className="button-wrapper">
                <button onClick={() => { setTemp(prevState => prevState + 1); colorFn() }}>+</button>
                <button onClick={() => { setTemp(prevState => prevState - 1); colorFn() }}>-</button>
            </div>
        </div>
    )
}

export default Counter;