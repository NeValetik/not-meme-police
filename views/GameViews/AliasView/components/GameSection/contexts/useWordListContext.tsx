import { createContext, FC, useCallback, useContext, useMemo, useRef, useState } from "react";
import { WORD_PACKS } from "../consts";
import { pickRandomWordFromWords } from "../utils/pickRandomFromPack";

const useWordListContext = createContext<{
  words: string[];
  setWords: (words: string[]) => void;
  pickRandomWord: () => string;
}>({
  words: [],
  setWords: () => {},
  pickRandomWord: () => "",
});

export const WordListProvider: FC<{children: React.ReactNode}> = (props) => {
  const { children } = props;
  const [words, setWords] = useState<string[]>([]);
  const currentPackWords = useRef<Set<string>>(new Set(WORD_PACKS[0].words));

  const pickRandomWord = useCallback(() => {
    const word = pickRandomWordFromWords(Array.from(currentPackWords.current));
    currentPackWords.current.delete(word);
    return word;
  }, []);

  const contextValue = useMemo(() => ({
    words,
    setWords,
    pickRandomWord,
  }), [words, pickRandomWord]);
  return (
    <useWordListContext.Provider value={contextValue}>
      {children}
    </useWordListContext.Provider>
  );
};

const useWordList = () => {
  const context = useContext(useWordListContext);
  if (!context) {
    throw new Error("useWordList must be used within a WordListProvider");
  }
  return context;
};

export default useWordList;