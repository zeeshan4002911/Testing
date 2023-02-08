import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!window.localStorage.getItem("token")) {
            return navigate("/");
        };
    }, [])

    return (
        <div className="box-container">
            <nav>
                <ul>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/">LOGOUT</Link></li>
                </ul>
                <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Authentication</h1>
            </nav>
            <main>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repudiandae officiis rerum impedit eum autem animi dolorem fugit quas unde, dignissimos ab. Hic vero nisi iste asperiores eaque labore praesentium?</main>
        </div>
    )
}

export default Home;