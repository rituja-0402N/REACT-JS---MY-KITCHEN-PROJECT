import "./Menu.css";
import Hooks from "./Hooks";
import { Form } from "./Form";
import { Link, Outlet } from "react-router-dom";
const dishes = ["Ragda Pattice 😍", "Sev Puri 😍", "Samosa Chaat 😍"];
const dishObject = dishes.map((dish, i) => ({
  id: i,
  title: dish,
}));
export function Menu(props) {
  console.log(props);
  return (
    <div className="Menu">
      <div id="link">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Outlet />
      </div>
      <div id="ChaatImg">
        <img
          height={300}
          width={300}
          //src="../img/indianChaat.jpg"
          src="https://images.pexels.com/photos/13063300/pexels-photo-13063300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="indian chaat picture"
        />
      </div>
      <div id="menuItem">
        <h3> OUR SPECIAL DISHES !!! </h3>
        <ul>
          {dishObject.map((dish) => (
            <li key={dish.id}>{dish.title}</li>
          ))}
        </ul>
        <section id="new">
          <h3> Newly Added on {new Date().getFullYear()}</h3>
        </section>
      </div>
      <div id="hooks">
        <Hooks />
      </div>
    </div>
  );
}
export default Menu;
