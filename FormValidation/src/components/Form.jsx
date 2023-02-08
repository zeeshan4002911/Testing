import React, { useState } from "react";
const Form = () => {
    const [err, setErr] = useState({
        first_name: "*",
        last_name: "*",
        email: "*"
    })
    const [submitted, setSubmitted] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        if (err.first_name === "" && err.last_name === "" && err.email === "") {
            setSubmitted("Successfully Submitted")
        } else {
            setSubmitted("Fill all the mandatory Fields")
        }
    }

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        if (key === "first_name") {
            (!value) ? setErr({ ...err, first_name: "Please Enter First name" }) : setErr({ ...err, first_name: "" })
        } else if (key === "last_name") {
            (!value) ? setErr({ ...err, last_name: "Please Enter Last name" }) : setErr({ ...err, last_name: "" })
        } else if (key === "email") {
            (!value) ? setErr({ ...err, email: "Please Enter Email" }) : setErr({ ...err, email: "" })
        }
    }
    return (
        <div className="container">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="first-name"> First Name: </label>
                <input type="text" name="first_name" id="first-name" onChange={(e) => handleChange(e)} />
                <div className="red">{err.first_name}</div>
                <label htmlFor="last-name"> Last Name: </label>
                <input type="text" name="last_name" id="last-name" onChange={(e) => handleChange(e)} />
                <div className="red">{err.last_name}</div>
                <label htmlFor="email"> Email: </label>
                <input type="text" name="email" id="email" onChange={(e) => handleChange(e)} />
                <div className="red">{err.email}</div>
                <div>{submitted}</div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;