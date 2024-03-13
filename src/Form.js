import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu";
export function Form() {
  const textTitle = useRef();
  const [feedback, saveFeedback] = useState("");
  const [ratings, updateRatings] = useState(0);
  //   const buttonTitle = useRef();
  const submit = (e) => {
    e.preventDefault();
    const title = textTitle.current.value;
    alert(` Spice Level :${title},Feedback:${feedback},Ratings :${ratings}`);
    textTitle.current.value = "";
    saveFeedback("");
    updateRatings(ratings);
  };
  return (
    <div className="Form">
      <div id="link">
        <Link to="/">Home</Link>
      </div>
      <div id="forms">
        <form onSubmit={submit}>
          <div id="spice-level">
            <input
              type="text"
              placeholder="Spice Level(Enter 1 - 3)"
              ref={textTitle}
            />
            {"      "}
            {/* <button>I Like 🌶️</button> */}
          </div>

          <div id="feedback">
            <input
              type="textbox"
              width={230}
              value={feedback}
              placeholder="How did you like our dishes?"
              onChange={(event) => saveFeedback(event.target.feedback)}
            />
          </div>

          <div id="ratings">
            <button onClick={() => updateRatings(ratings + 1)}>
              {" "}
              Please rate us ⭐️⭐️⭐️
            </button>
            <p> {ratings} Ratings </p>
          </div>
          <button>ADD</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
