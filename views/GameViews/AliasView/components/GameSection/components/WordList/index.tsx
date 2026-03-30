import { FC } from "react";
import WordCard, { WordCardStatus } from "../WordCard";
import useWordList from "../../contexts/useWordListContext";

const WordList:FC = () => {
  const { words } = useWordList();

  console.log(words);
  return (
    <div className="flex flex-wrap gap-2">
      {words.map((word) => (
        <WordCard key={word} word={word} status={WordCardStatus.Selected} />
      ))}
    </div>
  );
};

export default WordList;