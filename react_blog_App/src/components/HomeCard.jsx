import { useNavigate } from "react-router-dom";
const HomeCard = ({ name, id }) => {
    const navigate = useNavigate();
    return (
        <div className="card">
            <div>{name}</div>
            <button onClick={() => navigate(`/post`, {state:{id: id}})}>Click to Explore</button>
        </div>
    )
}
export default HomeCard;