import InputDemo from "./components/InputDemo/imputDemo";
import InputField from "./components/InputField/InputField";
import CheckBox from "./components/CheckBox/CheckBox";
import PersonCard from "./components/PersonCart/PersonCard";
import AnimalList from "./components/AnimalList/AnimalList";
import "./App.scss";

function App() {
	return (
		<>
  		<h1>🦹 super-villains-react 🦹</h1>
      <hr/>
			
      <InputField />
      <CheckBox />
      <hr/>
      <PersonCard />
      <hr/>
      <AnimalList />
		</>
	);
}

export default App;


/*
<InputDemo />
*/