import { Link } from "react-router-dom";

function AnimalCard(props) {
    return (
        <div className="p-4 shadow-xl rounded-sm">
            <h1 className="text-xl"><Link to={`/animals/${props.animal._id}`}>{props.animal.name}</Link></h1>
            <div className="flex justify-between items-center">
                <h3>{props.animal.type}</h3>
                <h3>{props.animal.breed}</h3>
            </div>
        </div>
    )
}

export default AnimalCard;