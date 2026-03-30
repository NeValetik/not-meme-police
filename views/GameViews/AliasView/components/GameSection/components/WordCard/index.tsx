import { FC } from "react";

export enum WordCardStatus {
  Selected = "selected",
  Correct = "correct",
  Incorrect = "incorrect",
  Hidden = "hidden",
  Revealed = "revealed",
}

interface WordCardProps {
  word: string;
  status: WordCardStatus;
}

const WordCard:FC<WordCardProps> = (props) => {
  const { word, status } = props;
  return (
    <div>
      <p>WordCard</p>
    </div>
  );
}

export default WordCard;