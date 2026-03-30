"use client";

import { FC, useEffect, useReducer } from "react";
import ActionField from "./components/ActionField";
import {
  initialRoundMachineState,
  RoundPhase,
  roundMachineReducer,
} from "./utils/machine";
import WordList from "./components/WordList";
import { WordListProvider } from "./contexts/useWordListContext";

const GameSection: FC = () => {
  const [state, dispatch] = useReducer(
    roundMachineReducer,
    initialRoundMachineState
  );

  useEffect(() => {
    if (state.phase !== RoundPhase.Playing) {
      return;
    }

    if (state.secondsLeft <= 0) {
      dispatch({ type: "TIME_UP" });
      return;
    }

    const timerId = window.setTimeout(() => {
      dispatch({ type: "TIME_TICK" });
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, [state.phase, state.secondsLeft]);

  useEffect(() => {
    if (state.phase === RoundPhase.Playing && state.secondsLeft === 0) {
      dispatch({ type: "TIME_UP" });
    }
  }, [state.phase, state.secondsLeft]);

  return (
    <WordListProvider>
      <div className="flex flex-col items-center gap-3 h-full">
        <p>Time left: {state.secondsLeft}s</p>
        <p>Step: {state.step}</p>
        <WordList />
        <ActionField
          phase={state.phase}
          onStart={() => dispatch({ type: "START" })}
          onNext={() => dispatch({ type: "NEXT" })}
        />
      </div>
    </WordListProvider>
  );
};

export default GameSection;
