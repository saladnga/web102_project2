type FlashCardProps = {
  question: string;
  answer: string;
  isFlipped: boolean;
  onClick: () => void;
};

export const FlashCard = ({
  question,
  answer,
  isFlipped,
  onClick,
}: FlashCardProps) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <h2>{question}</h2>
        </div>
        <div className="card-back">
          <h2>{answer}</h2>
        </div>
      </div>
    </div>
  );
};
