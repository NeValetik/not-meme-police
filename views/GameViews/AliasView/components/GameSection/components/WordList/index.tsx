import { FC } from "react";
import WordCard, { WordCardStatus } from "../WordCard";

const WordList:FC = () => {
  const words = [
    {
      word: "Word 1",
      status: WordCardStatus.Selected,
    },
    {
      word: "Word 2",
      status: WordCardStatus.Correct,
    },
  ];
  return (
    <div>
      {words.map((word) => (
        <WordCard key={word.word} word={word.word} status={word.status} />
      ))}
    </div>
  );
};

export default WordList;