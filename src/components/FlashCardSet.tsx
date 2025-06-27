import { useState } from "react";
import { FlashCard } from "./FlashCard";
import CardsControl from "./CardsControl";

type FlashCardSetProps = {
  cards: { question: string; answer: string }[];
  title: string;
  description: string;
};

export const FlashCardSet = ({
  cards,
  title,
  description,
}: FlashCardSetProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(
    null
  );

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetState();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetState();
    }
  };

  const resetState = () => {
    setIsFlipped(false);
    setUserInput("");
    setFeedback(null);
  };

  const handleSubmit = () => {
    const user = userInput.trim().toLowerCase();
    const correct = currentCard.answer.trim().toLowerCase();
    setFeedback(user === correct ? "correct" : "incorrect");
    setIsFlipped(true);
  };

  return (
    <div className="container">
      <h1>{title}</h1>
      <h3>{description}</h3>
      <h3>Number of cards: {cards.length}</h3>

      <div className="flashcard">
        <FlashCard
          question={currentCard.question}
          answer={currentCard.answer}
          isFlipped={isFlipped}
          onClick={() => setIsFlipped(!isFlipped)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Type your answer"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{
            padding: "10px",
            backgroundColor: "white",
            color: "black",
            border:
              feedback === "correct"
                ? "2px solid green"
                : feedback === "incorrect"
                ? "2px solid red"
                : "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
            width: "300px",
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
        {feedback === "correct" && (
          <p style={{ color: "green" }}>Correct! 🎉</p>
        )}
        {feedback === "incorrect" && (
          <p style={{ color: "red" }}>Incorrect. Try again or flip the card.</p>
        )}
      </div>

      <CardsControl
        onNext={handleNext}
        onBack={handleBack}
        disableNext={currentIndex === cards.length - 1}
        disableBack={currentIndex === 0}
      />
    </div>
  );
};
