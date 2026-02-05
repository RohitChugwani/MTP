export default function Explanation({ progress }) {
  let title = "";
  let text = "";

  if (progress < 20) {
  return <p>The text prompt describes what the image should contain.</p>;
}

if (progress < 40) {
  return (
    <p>
      The prompt is converted into numerical embeddings that represent important
      visual features.
    </p>
  );
}

if (progress < 55) {
  return (
    <p>
      These embeddings are processed by a neural network with many hidden layers,
      gradually transforming text information into visual structure.
    </p>
  );
}

return (
  <p>
    Through many transformations, the neural network gradually refines noise
    into a coherent image.
  </p>
  
);


  return (
    <div style={{ marginBottom: 15 }}>
      <h3 style={{ marginBottom: 5 }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 15, color: "#444" }}>{text}</p>
    </div>
  );
}
