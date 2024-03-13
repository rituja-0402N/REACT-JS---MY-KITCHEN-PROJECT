import { useState, useEffect } from "react";

const query = `
query{
  allLifts{
    name,
    elevationGain,
    status
  }
}
`;
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
};
function DataApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://snowtooth.moonhighway.com/`, opts)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h2> Loading ....</h2>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
  //   return <h1>DATA</h1>;
}
function GitUser({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      {/* <img src={avatar} height={200} width={200} /> */}
    </div>
  );
}
function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{elevationGain}</h2>
      <h3>{status}</h3>
    </div>
  );
}
export default DataApi;
