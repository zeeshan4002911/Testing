import React, { useState, useEffect } from "react";
import Card from "./Card";
import { DATA } from "../data";

const Post = () => {
    const [data, setData] = useState([]);
    const [data_init, setDataInit] = useState([]);

    useEffect(() => {
        console.log(DATA);
        setData(DATA);
        setDataInit(DATA);
    }, [])

    const handleFilter = () => {
        const input = document.getElementById("search").value;
        const option = document.getElementById("option").value;

        if (input === "") return;
        const pattern = new RegExp(input);
        setData(data_init.filter((obj) => obj[option].match(pattern)));
    }

    return (
        <div>
            <div className="input-wrapper">
                <input type="text" name="search" id="search" autoFocus />
                <select id="option">
                    <option value="first_name" defaultValue="first_name">First Name</option>
                    <option value="last_name">Last Name</option>
                    <option value="email">Email</option>
                </select>
                <button id="submit" onClick={handleFilter}>filter</button>
            </div>
            <ol className="container">
                {data.map(obj => (
                    <Card key={obj.id} data={obj} />
                ))}
            </ol>
        </div>
    )
}

export default Post;