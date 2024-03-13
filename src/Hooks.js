import { useState, useEffect, useReducer } from "react";
import "./Hooks.css";

function Hooks() {
  const [emotion, setEmotion] = useState("happy");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`Its ${emotion} right now`);
  }, [emotion]);

  // useEffect(() => {
  //   console.log(`its second check${counter}`);
  // }, [counter]);

  const [Ordered, setChecked] = useReducer((Ordered) => !Ordered, false);

  return (
    <div className="Hooks">
      <div id="checkbox">
        <input type="checkbox" value={Ordered} onChange={setChecked} />
        <label>{Ordered ? "Ordered" : "Not Ordered"}</label>
      </div>
      {/* <h2>Current Emotion is {emotion}</h2> */}
      {/* <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>excited</button> */}
      <div id="counter">
        <h2>Total Ordered Items : {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Click to add</button>
      </div>
    </div>
  );
}
export default Hooks;
