// const dishes = ["Ragda Pattice 😍", "Sev Puri 😍", "Samosa Chaat 😍"];
// const dishObject = dishes.map((dish, i) => ({
//     id: i,
//     title: dish,
// }));
import "./Menu.css";
import Hooks from "./Hooks";
function Menu(props) {
  console.log(props);
  return (
    <div>
      <img
        height={300}
        width={300}
        //src="../img/indianChaat.jpg"
        src="https://images.pexels.com/photos/13063300/pexels-photo-13063300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="indian chaat picture"
      />
      <Hooks />
      <ul>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
      <section>
        <h3> Newly Added on {new Date().getFullYear()}</h3>
      </section>
    </div>
  );
}
export default Menu;
