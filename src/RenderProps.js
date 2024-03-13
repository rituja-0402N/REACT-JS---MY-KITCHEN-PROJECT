import { Link } from "react-router-dom";
import { App } from "./App";
import "./Menu.css";

const tahoe_peaks = [
  { name: "Delhi", Address: "21, Chindwara Nagar, East Colony, 08969" },
  { name: "Noida", Address: "50, Sector 50,East Colony, 08969" },
  { name: "Gurgaon", Address: "34, Postwala Bunglow, 098569" },
  { name: "South Delhi", Address: "42, Nalasupar Nagar, South Colony, 08009" },
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((peak) => (
        <li key={peak.name}>{renderItem(peak)}</li>
      ))}
    </ul>
  );
}
export function RenderProps() {
  return (
    <div className="props">
      <div id="link">
        <Link to="/">Home</Link>
      </div>
      <div id="list">
        <List
          data={tahoe_peaks}
          renderEmpty={<p>This is an empty list.</p>}
          renderItem={(item) => (
            <>
              {item.name} - {item.Address}
            </>
          )}
        />
      </div>
    </div>
  );
}

export default RenderProps;
