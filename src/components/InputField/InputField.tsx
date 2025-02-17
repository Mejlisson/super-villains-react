import { useState } from "react";

export default function InputField() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    return (
        <>
        <input  type="text" 
                value={inputValue}
                onChange={handleChange}
                placeholder="Type something.."
        />
        <p> You typed: {inputValue}</p>

        </>
    );
}