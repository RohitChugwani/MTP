import { useState } from "react";

import Phase1TraditionalEdit from "./Phases/Phase1TraditionalEdit";
import Phase2AIOptions from "./Phases/Phase2AIOptions";
import Phase3AIProcess from "./Phases/Phase3AIProcess";
import Phase4WhatStayedSame from "./Phases/Phase4WhatStayedSame";
import FinalReflection from "./Phases/FinalReflection";

import "./module2.css";

export default function ImageManipulation() {
  const [phase, setPhase] = useState(1);
  const [aiAction, setAiAction] = useState(null);
  const [aiIntent, setAiIntent] = useState(null);

  return (
    <div className="image-manipulation-container">
      {phase === 1 && (
        <Phase1TraditionalEdit onNext={() => setPhase(2)} />
      )}

      {phase === 2 && (
        <Phase2AIOptions
          onNext={(action) => {
            setAiAction(action);     // store what student chose
            setPhase(3);             // move to Phase 3
          }}
        />
      )}

      

      {phase === 3 && (
        <Phase3AIProcess
          aiAction={aiAction}
          aiIntent={aiIntent}
          setAiIntent={setAiIntent}
          onNext={() => setPhase(4)}
        />
      )}

      {phase === 4 && (
  <Phase4WhatStayedSame
    aiAction={aiAction}
    onNext={() => setPhase(5)}
  />)}

      {phase === 5 && <FinalReflection />}
    </div>
  );
}
