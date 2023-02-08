import React, { useState, useEffect } from "react";
import Card from "./Card";

const Post = () => {
    const [data, setData] = useState([]);
    const [data_init, setDataInit] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                console.log("fetched data", data);
                setData(data);
                setDataInit(data);
            })
    }, [])

    const handleFilter = () => {
        const input = document.getElementById("search").value;
        if (input === "") return;
        const pattern = new RegExp(input);
        setData(data_init.filter((obj) => obj.title.match(pattern)))
    }

    return (
        <div>
            <div className="input-wrapper">
                <input type="text" name="search" id="search" autoFocus />
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