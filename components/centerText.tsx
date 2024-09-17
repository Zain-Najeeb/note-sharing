"use client"

import React from 'react';
import { TypeWriter } from "../hooks/index"

type CenterTextProps = {
  words: string[];
};

const CenterText: React.FC<CenterTextProps> = ({ words }) => {
  const currentWord = TypeWriter(words)

  return (
    <div className="flex justify-center mt-16">
      <h1 className="text-6xl text-white font-bold">
        {currentWord}
        <span className="inline-block w-1 h-12 bg-white ml-1 animate-blink"></span>
      </h1>
    </div>
  );
};

export default CenterText;