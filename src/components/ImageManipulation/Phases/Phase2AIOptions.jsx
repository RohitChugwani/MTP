import { useState } from "react";

export default function Phase2AIEdit({ onNext }) {
  const [selectedEdit, setSelectedEdit] = useState(null);

  const edits = [
  {
    id: "remove-glasses",
    label: "Remove glasses",
    hint: "AI understands what glasses are"
  },
  {
    id: "change-expression",
    label: "Change facial expression",
    hint: "AI understands faces and emotions"
  }
];


  return (
    <div className="phase phase-2">
      <h2>AI-Based Image Editing</h2>

      <p className="guidance-text">
        Now try changing what is <b>inside</b> the image.
      </p>

      <p className="framing-text">
        These tools don’t adjust the image — they change what the image contains.
      </p>

      <div className="editor-container">
        {/* LEFT: IMAGE */}
        <div className="image-column">
          <img
            src="/assets/image10.png"
            alt="AI Editable"
            className="editable-image"
          />
        </div>

        {/* RIGHT: AI OPTIONS */}
        <div className="controls">
          <h4>Choose an AI edit</h4>

          <p className="control-hint">
            Select what you want to change in the image.
          </p>

          <div className="ai-options">
            {edits.map((edit) => (
              <button
                key={edit.id}
                className={`ai-option ${
                  selectedEdit === edit.id ? "selected" : ""
                }`}
                onClick={() => setSelectedEdit(edit.id)}
              >
                {edit.label}
              </button>
            ))}
          </div>

          {/* INLINE FEEDBACK + NEXT */}
          {selectedEdit && (
            <div className="ai-inline-feedback">
              <p>
                You chose to change the <b>content</b> of the image.
              </p>

              <p className="micro-hint">
                Click <b>Next</b> to see how AI performs this change.
              </p>

             <button
  className="next-btn"
  onClick={() => onNext(selectedEdit)}
>
  Next
</button>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
