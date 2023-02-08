import { useState } from "react";

const Temp = () => {
    const [value, setValue] = useState(0);
    const handleClick = (opr) => {
        switch(opr) {
            case "+":
                setValue( prevState => prevState + 1);
                break;
            case "-":
                setValue(prevState => prevState - 1);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <div>{value}</div>
            <button onClick={() => handleClick("+")}>+</button>
            <button onClick={() => handleClick("-")}>-</button>
        </>
    )
}

export default Temp;