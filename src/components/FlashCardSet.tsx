import { useState } from "react";
import { FlashCard } from "./FlashCard";
import CardsControl from "./CardsControl";

export const FlashCardSet = ({ cards, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const handleNext = () => {
    const newIndex = Math.floor(Math.random() * cards.length);
    setCurrentIndex(newIndex);
    setIsFlipped(false);
  };
  return (
    <div className="container">
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="flashcard">
        <FlashCard
          question={cards[currentIndex].question}
          answer={cards[currentIndex].answer}
          isFlipped={isFlipped}
          onClick={() => setIsFlipped(!isFlipped)}
        />
      </div>
      <CardsControl onNext={handleNext} />
    </div>
  );
};
