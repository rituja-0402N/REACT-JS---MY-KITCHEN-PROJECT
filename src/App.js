import logo from "./logo.svg";
import "./App.css";
import Menu from "./Menu";
import Hooks from "./Hooks";
import Form from "./Form";
import DataApi from "./DataApi";
import RenderProps from "./RenderProps";
import { Link } from "react-router-dom";
import { useState } from "react";

export function App() {
  // const [color, changeColor] = useState("violet");
  return (
    <div className="App">
      <div id="header">
        <h1>Welcome to Sujata's Kitchen</h1>
      </div>

      <div>
        <img
          id="Dadi"
          src="https://thumbs.dreamstime.com/b/art-illustration-195223883.jpg"
          height={300}
        />
        <nav id="links">
          <ul>
            <li>
              <Link to="/menu"> Menu</Link>
            </li>
            <li>
              <Link to="/props"> Outlets</Link>
            </li>
            <li>
              <Link to="/form"> Ratings</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <Menu dishes={dishObject} /> */}
    </div>
  );
}

export default App;
