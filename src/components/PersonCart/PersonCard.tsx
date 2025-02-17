import "./PersonCard.scss";
import {useState} from "react";

type Person = {
    name: string;
    age: number;
};

export default function PersonCard(){
    const[person, setPerson] = useState<Person>({name: "", age: ""});

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //Vin får inte göra: person.name = e.target.value
        setPerson({...person, name: e.target.value});
    };
    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //Vin får inte göra: person.name = e.target.value
        setPerson({...person, age: e.target.value});
    };

    return (
        <>
            <h2>PersonCard-component</h2>
            <ul>
                <li>Name: {person.name}</li>
                <li>Age: {person.age}</li>
            </ul>
            <label htmlFor="personName">Name 
            <input  type="text" 
                    id="personName" 
                    placeholder="Type in a Name..."
                    value={person.name} 
                    onChange={handleNameChange} /> 
            </label>
            <label htmlFor="personAge">Age 
            <input  type="text" 
                    id="personAge" 
                    placeholder="Type in age..."
                    value={person.age} 
                    onChange={handleAgeChange} /> 
            </label>

        </>
    );
}