import logo from "./logo.svg";
import "./App.css";
import Menu from "./Menu";
import Hooks from "./Hooks";
import Form from "./Form";
import DataApi from "./DataApi";
import RenderProps from "./RenderProps";
const dishes = ["Ragda Pattice 😍", "Sev Puri 😍", "Samosa Chaat 😍"];
const dishObject = dishes.map((dish, i) => ({
  id: i,
  title: dish,
}));
function App() {
  return (
    <div className="App">
      <div id="header">{/* <h1>Welcome to Sujata's Kitchen</h1> */}</div>
      {/* <Hooks /> */}
      {/*
       */}
      <RenderProps />
      {/* <Menu dishes={dishObject} /> */}
    </div>
  );
}

export default App;
