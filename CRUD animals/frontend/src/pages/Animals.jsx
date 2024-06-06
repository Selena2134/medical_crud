import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Modal from "../components/Modal";
import EditAnimal from "../components/EditAnimal";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [updatedAnimal, setUpdatedAnimal] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/animals").then((resp) => {
      setAnimals(resp.data);
    });
  }, []);

  const deleteAnimal = (id) => {
    axios.delete(`http://localhost:3000/animals/${id}`).then((resp) => {
      const newAnimals = animals.filter((animal) => animal._id != id);
      setAnimals(newAnimals);
    });
  };

  const editAnimal = (animal) => {
    setUpdatedAnimal(animal);
    setShowModal(true);
  };

  const editAnimalFinished = (animal) => {
    setShowModal(false);
    setUpdatedAnimal({});
    const newAnimals = animals.filter(an => an._id != animal._id);
    newAnimals.push(animal);
    setAnimals(newAnimals);
  }

  return (
    <>
      <Link
        to={"/animals/create"}
        className="bg-[#5A7A0A] px-3 py-1 rounded-sm mb-5 text-white hover:cursor-pointer inline-block"
      >
        Add an animal
      </Link>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Birthdate</th>
            <th className="px-6 py-3">Type</th>
            <th className="px-6 py-3">Breed</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {animals.map((animal) => (
            <tr
              key={animal._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="p-2">{animal.name}</td>
              <td className="p-2">
                {new Date(animal.birthdate).toLocaleDateString()}
              </td>
              <td className="p-2">{animal.type}</td>
              <td className="p-2">{animal.breed}</td>
              <td className="flex justify-around items-center p-2">
                <Link to={`/animals/${animal._id}`}>
                  <EyeIcon className="size-6 hover:text-blue-400 hover:cursor-pointer" />
                </Link>
                <PencilSquareIcon
                  onClick={() => editAnimal(animal)}
                  className="size-6 hover:text-orange-400 hover:cursor-pointer"
                />
                <TrashIcon
                  className="size-6 hover:text-red-400 hover:cursor-pointer"
                  onClick={() => deleteAnimal(animal._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <Modal close={() => setShowModal(false)}>
          <EditAnimal
            name={updatedAnimal.name}
            type={updatedAnimal.type}
            birthdate={updatedAnimal.birthdate}
            breed={updatedAnimal.breed}
            id={updatedAnimal._id}
            editAnimalFinished={editAnimalFinished}
          />
        </Modal>
      )}
    </>
  );
}

export default Animals;
