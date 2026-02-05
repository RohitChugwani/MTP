function ReflectionModal({ question, onContinue }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 30,
          borderRadius: 12,
          width: 400,
          textAlign: "center"
        }}
      >
        <h3>Pause for Reflection</h3>

        <p style={{ marginTop: 10 }}>{question}</p>

        <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
          The animation will continue after this step.
        </p>

        <button
          onClick={onContinue}
          style={{ marginTop: 20 }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ReflectionModal;
