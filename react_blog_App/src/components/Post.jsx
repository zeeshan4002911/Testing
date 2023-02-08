import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import posts from "../API_data/posts.json";

const Post = () => {
    const location = useLocation();
    const id = location.state.id;
    const [filter_post, setFilter_post] = useState([])
    useEffect(() => {
        const data = posts.filter((obj) => obj.userId === id);
        setFilter_post(data);
        console.log(filter_post)
    }, [id, filter_post])
    return (
        <div className="post">
            <table >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       filter_post.map((obj) => (
                        <tr key={obj.id}>
                            <td>{obj.title}</td>
                            <td>{obj.body}</td>
                        </tr>
                       ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Post;