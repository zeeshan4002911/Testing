import React from "react";

const Card = ({ data }) => {
    return (
        <li>
            <div className="card">
                <p>First Name: {data.first_name}</p>
                <p>First Last: {data.last_name}</p>
                <p>Email: {data.email}</p>
                <p>Gender: {data.gender}</p>
                <p>IP Address: {data.ip_address}</p>
            </div>
        </li>
    )
}

export default Card;