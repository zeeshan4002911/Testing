import HomeCard from "./HomeCard";
import users from "../API_data/users.json";

const Home = () => {
    return (
        <div className="home">
            {
                users.map(obj => (
                    <HomeCard key={obj.id} name={obj.name} id={obj.id}/>
                ))
            }
        </div>
    )

}

export default Home;