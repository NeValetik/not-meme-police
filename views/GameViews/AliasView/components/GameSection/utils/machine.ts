export enum RoundPhase {
  Start = "start",
  Playing = "playing",
  Finished = "finished",
}

const ROUND_SECONDS = 60;

export interface RoundMachineState {
  phase: RoundPhase;
  step: number;
  secondsLeft: number;
}

export type RoundMachineEvent =
  | { type: "START" }
  | { type: "NEXT" }
  | { type: "TIME_TICK" }
  | { type: "TIME_UP" };

export const initialRoundMachineState: RoundMachineState = {
  phase: RoundPhase.Start,
  step: 0,
  secondsLeft: ROUND_SECONDS,
};

export const roundMachineReducer = (
  state: RoundMachineState,
  event: RoundMachineEvent
): RoundMachineState => {
  switch (state.phase) {
    case RoundPhase.Start:
      if (event.type === "START") {
        return {
          phase: RoundPhase.Playing,
          step: 1,
          secondsLeft: ROUND_SECONDS,
        };
      }
      return state;
    case RoundPhase.Playing:
      if (event.type === "NEXT") {
        return {
          ...state,
          step: state.step + 1,
        };
      }
      if (event.type === "TIME_TICK") {
        return {
          ...state,
          secondsLeft: Math.max(0, state.secondsLeft - 1),
        };
      }
      if (event.type === "TIME_UP") {
        return {
          ...state,
          phase: RoundPhase.Finished,
          secondsLeft: 0,
        };
      }
      return state;
    case RoundPhase.Finished:
      if (event.type === "START") {
        return {
          phase: RoundPhase.Playing,
          step: 1,
          secondsLeft: ROUND_SECONDS,
        };
      }
      return state;
    default:
      return state;
  }
};
