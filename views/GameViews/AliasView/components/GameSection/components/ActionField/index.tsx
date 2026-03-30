import { FC } from "react";
import { Button } from "@/components/ui/button";
import { RoundPhase } from "../../utils/machine";
import useWordList from "../../contexts/useWordListContext";
import { WORD_PACKS } from "../../consts";

interface ActionFieldProps {
  phase: RoundPhase;
  onStart: () => void;
  onNext: () => void;
}

const ActionField: FC<ActionFieldProps> = (props) => {
  const { phase, onStart, onNext } = props;
  const buttonLabel = phase === RoundPhase.Playing ? "Next" : "Start";
  const onClick = phase === RoundPhase.Playing ? onNext : onStart;
  const { words, setWords, pickRandomWord } = useWordList();

  const handleClick = async () => {
    onClick();
    if (phase === RoundPhase.Playing) {
      const word = await pickRandomWord();
      setWords([...words, word]);
    }
  }

  return (
    <div>
      <Button onClick={handleClick}>{buttonLabel}</Button>
    </div>
  );
};

export default ActionField;
