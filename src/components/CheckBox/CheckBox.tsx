import { useState } from 'react';

export default function CheckBox() {
  const [checked, setChecked] = useState(true); 

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target; 
    console.log(form.elements.checkbox.checked); //Logga resultatet av checkboxen
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Checkbox:{" "}
        <input
          type="checkbox"
          name="checkbox" 
          defaultChecked={true}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </label>{" "}
      <hr />
      <p>
        Radio buttons:
        <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
        <label><input type="radio" name="myRadio" value="option2" /> Option 2</label>
        <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}