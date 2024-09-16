"use client"

import { TypeWriter } from "../hooks/index"
type centerTextProps = {
  words: string[];
};

const CenterText: React.FC<centerTextProps> = ({ words }) => {
  const currentWord = TypeWriter(words)
  return (
    <div className="flex justify-center mt-16">
      <h1 className="text-3xl font-bold">{currentWord}</h1>
    </div>
  );
};

export default CenterText;