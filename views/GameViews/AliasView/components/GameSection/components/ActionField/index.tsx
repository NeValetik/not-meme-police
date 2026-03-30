import { FC } from "react";
import { Button } from "@/components/ui/button";
import { RoundPhase } from "../../utils/machine";

interface ActionFieldProps {
  phase: RoundPhase;
  onStart: () => void;
  onNext: () => void;
}

const ActionField: FC<ActionFieldProps> = (props) => {
  const { phase, onStart, onNext } = props;
  const buttonLabel = phase === RoundPhase.Playing ? "Next" : "Start";
  const onClick = phase === RoundPhase.Playing ? onNext : onStart;

  return (
    <div>
      <Button onClick={onClick}>{buttonLabel}</Button>
    </div>
  );
};

export default ActionField;

