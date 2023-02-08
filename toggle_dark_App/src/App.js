import React, { useState, useRef } from 'react';
import "./App.css";

function App() {
    const [click, setClick] = useState(false);
    const toggle = useRef();
    const main = useRef();
    const handleClick = () => {
        setClick(!click);
        if (click) {
            toggle.current.style.background = "linear-gradient(rgb(0, 0, 137), rgb(107, 223, 255)";
            main.current.style.backgroundColor = "#ccc";
        }
        else {
            toggle.current.style.background = "linear-gradient(rgb(1, 1, 40), rgb(27, 23, 255))"
            main.current.style.backgroundColor = "black";
        }
    }
    return (
        <div id="main" ref={main}>
            <div className='toggle' ref={toggle} onClick={handleClick}>
                {
                    click ?
                        <div className='dark'>🌙</div>
                        :
                        <div className='light'>☀️</div>
                }
            </div>
            <div className='text'>
                {
                    click ?
                        <div style={{ color: "white" }}>It's a Dark Theme!</div>
                        :
                        <div>It's a Light Theme!</div>
                }
            </div>
        </div>
    )
}
export default App;