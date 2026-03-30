import { WordPack } from "../consts";

export const pickRandomFromPack = (pack: WordPack) => {
  return pack.words[Math.floor(Math.random() * pack.words.length)];
}

export const pickRandomWordFromWords = (words: string[]) => {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
