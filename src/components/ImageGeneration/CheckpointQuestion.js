export default function CheckpointQuestion({ question, options, onAnswer }) {
  return (
    <div
      style={{
        border: "1px solid #aaa",
        padding: 20,
        marginTop: 20,
        borderRadius: 8,
        background: "#f9f9f9"
      }}
    >
      <p style={{ fontWeight: "bold" }}>{question}</p>

      {options.map((opt, i) => (
        <button
          key={i}
          onClick={() => onAnswer(opt)}
          style={{ display: "block", marginTop: 10 }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
