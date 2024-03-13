const tahoe_peaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 },
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
function RenderProps() {
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={<p>This is an empty list.</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
  );
}

export default RenderProps;
