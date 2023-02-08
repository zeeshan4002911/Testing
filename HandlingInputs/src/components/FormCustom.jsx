import React, { useState } from "react";
const Form = () => {
    const [data, setData] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        let cool = false;
        if (form[6]?.value === "on") cool = true 
        const data = {
            "name": form[0]?.value,
            "age": form[1]?.value,
            "gender": form[2]?.value,
            "occupation": form[5]?.value,
            "isCool": cool,
        }
        console.log(data)
        setData(JSON.stringify(data));

    }
    return (
        <>
        <div className="container">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" />
                <label htmlFor="age">Age: </label>
                <input type="number" name="age" id="age" />
                <label htmlFor="gender">Gender:</label>
                <div id="gender">
                <input type="radio" name="gender" id="male" value="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" value="female"/>
                <label htmlFor="female">Female</label>
                <input type="radio" name="gender" id="others" value="others"/>
                <label htmlFor="others">Others</label>
                </div>
                <label htmlFor="occupation">Occupation: </label>
                <select name="occupation" id="occupation">
                    <option value="none">..Select..</option>
                    <option value="frontEnd">FrontEnd</option>
                    <option value="backEnd">BackEnd</option>
                    <option value="fullEnd">Full End</option>
                </select>
                <label htmlFor="cool"><input type="checkbox" id="cool"/> Are you Cool?</label>
                <button type="submit">Submit</button>
            </form>
        </div>
            {data && <div>{data}</div>}
            </>
    )
}

export default Form;