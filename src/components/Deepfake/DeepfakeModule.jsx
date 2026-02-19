import { useState } from "react";

import Phase1WhatIsDeepfake from "./Phases/Phase1WhatIsDeepfake";
import Phase2SpotTheClues from "./Phases/Phase2SpotTheClues";
import Phase3WhyTheyFoolUs from "./Phases/Phase3WhyTheyFoolUs";
import Phase4HowDeepfakesWork from "./Phases/Phase4HowDeepfakeWorks";
import Phase5SpotTheFake from "./Phases/Phase5SpotTheFake";
import PhaseFinalReflection from "./Phases/PhaseFinalReflection";
// later:
// import Phase3ExplainDeepfake from "./Phase3ExplainDeepfake";

export default function DeepfakeModule() {
  const [phase, setPhase] = useState(1);

  return (
    <div className="module deepfake-module">
      {phase === 1 && (
        <Phase1WhatIsDeepfake onNext={() => setPhase(2)} />
      )}

      {phase === 2 && (
        <Phase2SpotTheClues onNext={() => setPhase(4)} />
      )}

      
      {phase === 3 && (
        <Phase3WhyTheyFoolUs onNext={() => setPhase(4)} />
      )}

      {phase === 4 && (
        <Phase4HowDeepfakesWork onNext={() => setPhase(5)} />
      )}
       {phase === 5 && (
        <Phase5SpotTheFake onNext={() => setPhase(6)} />
      )}
       {phase === 6 && (
        <PhaseFinalReflection />
      )}
     
    </div>
  );
}
