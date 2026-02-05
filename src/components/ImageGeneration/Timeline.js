
export default function Timeline({ progress, setProgress, disabled }) {
  return (
    <input
      type="range"
      min={0}
      max={100}
      value={progress}
      disabled={disabled}
      onChange={(e) => setProgress(Number(e.target.value))}
    />
  );
}

