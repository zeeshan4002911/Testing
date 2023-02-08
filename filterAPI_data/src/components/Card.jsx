import React from "react";

const Card = ({ data }) => {
    return (
        <li>
            <p>{data.title}</p>
        </li>
    )
}

export default Card;