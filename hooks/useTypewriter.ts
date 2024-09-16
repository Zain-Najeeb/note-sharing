"use client"
import { useEffect, useState } from 'react';

const useTypewriter = (words: string[], typingSpeed = 60, deletingSpeed = 40, pauseDuration = 1100) => {
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentIndex % words.length];

    const timer = setTimeout(() => {
      if (!isDeleting && currentWord !== word) {
        setCurrentWord(word.substring(0, currentWord.length + 1));
      } else if (isDeleting && currentWord !== '') {
        setCurrentWord(word.substring(0, currentWord.length - 1));
      } else if (currentWord === word && !isDeleting) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (currentWord === '' && isDeleting) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentWord, currentIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration]);

  return currentWord;
};
export default useTypewriter;