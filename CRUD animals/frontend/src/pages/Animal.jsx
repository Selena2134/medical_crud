import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimalCard from "../components/AnimalCard";

function Animal() {
    const [animal, setAnimal] = useState({});
    
    const params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/animals/${params.id}`)
            .then((resp) => {
                setAnimal(resp.data);
            })
    }, []);

    return (
        <AnimalCard animal={animal}/>
    );
}

export default Animal;