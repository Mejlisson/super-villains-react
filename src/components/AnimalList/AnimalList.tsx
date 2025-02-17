import { useState } from "react";


export default function AnimalList() {
    const [animals, setAnimals] = useState<string[]>(["Cat", "Dog"]);
    const [inputAnimal, setInputAnimal] = useState("");

    const editAnimal = (animal: string) => {
		setAnimals(animals.map((a) => (a === animal ? inputAnimal : a)));
	};

    const deleteAnimal = (animal: string) => {
		setAnimals(animals.filter((a) => a !== animal));
	};


    const addAnimal = () => {
        // när vi klickar på knappen ska vi lägga till ett djur till arrayen
        // vi får inte göra så här animals.push(inputAnimal);
        setAnimals([...animals, inputAnimal]);
    };

    return (
        <>
            <h1>Animal List</h1>
            <br/>
            <input
                type="text"
                placeholder="Type in an Animal..."
                value={inputAnimal}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInputAnimal(e.target.value);
                }}
            />
         <button onClick={addAnimal}>Add Animal</button>
			<ul>
				{animals.map((animal) => (
					<li key={animal}>
						{animal}{" "}
		<button	onClick={() => {deleteAnimal(animal);}}>Delete</button>{" "}
						<button onClick={() => editAnimal(animal)}>Change me</button>
					</li>
				))}
			</ul>
        </>
    );
}
