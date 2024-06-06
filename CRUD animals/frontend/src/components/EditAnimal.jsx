import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

function EditAnimal(props) {
  const [id, setId] = useState(props.id);
  const [name, setName] = useState(props.name);
  const [type, setType] = useState(props.type);
  const [breed, setBreed] = useState(props.breed);

  const date = props.birthdate.split('T')[0];
  const [birthdate, setBirthdate] = useState(date);

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      birthdate,
      type,
      breed,
    };
    const response = await axios.put(`http://localhost:3000/animals/${id}`, data);
    setId('');
    setName('');
    setType('');
    setBreed('');
    props.editAnimalFinished(response.data);
  };

  return (
    <>
      <form onSubmit={submit} className="bg-green-200 shadow-md p-4">
        <div className="flex flex-col mb-4">
          <label>Name</label>
          <input
            className="border border-green-500 px-3 py-1"
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>Birthdate</label>
          <input
            className="border border-green-500 px-3 py-1"
            placeholder="Birthdate"
            type="date"
            onChange={(e) => setBirthdate(e.target.value)}
            value={birthdate}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>Type</label>
          <input
            className="border border-green-500 px-3 py-1"
            placeholder="Type"
            type="text"
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>Breed</label>
          <input
            className="border border-green-500 px-3 py-1"
            placeholder="Breed"
            type="text"
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
          />
        </div>

        <input
          className="bg-[#5A7A0A] px-3 py-1 rounded-sm mb-5 text-white hover:cursor-pointer inline-block"
          type="submit"
        />
      </form>
    </>
  );
}

export default EditAnimal;
