import React, { useState, useEffect } from "react";
import styles from "../styles/styles.contact.module.css"

const Contact = () => {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        (async function () {
            await fetch("https://randomuser.me/api/?results=3")
                .then(response => response.json())
                .then(data => {
                    console.log(data.results);
                    // modifying the fetched data with minor and show properties
                    setFetchedData(data.results.map((obj) => {
                        if (obj.dob.age < 18) { obj["minor"] = "minor" }
                        else if (obj.dob.age > 18) { obj["minor"] = "adult" };
                        obj.show = false;
                        return obj;
                    }))
                })

        })();
    }, [])

    const handleClick = (id) => {
        setFetchedData(fetchedData.map((obj) => {
            if (id === obj.id.value) {
                obj.show = !obj.show;
            }
            return obj
        }))
    }

    return (
        <div>
            {
                fetchedData && fetchedData.map(data => (
                    <div className="container" key={data.id.value + data.id.name}>
                        <div style={{ height: "100%" }}>
                            <img className={styles.img} src={data.picture.medium} alt={data.picture.medium} />
                        </div>
                        <div>
                            <p>Name: {data.name.first} {data.name.last}</p>
                            <p>Email: {data.email}</p>
                            <p>Category: {data.minor}</p>
                            {data.show && <p>Age: {data.dob.age}</p>}
                            <button onClick={() => handleClick(data.id.value)}>Toggle age</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Contact;