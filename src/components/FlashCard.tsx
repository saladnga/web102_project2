export const FlashCard = ({ question, answer, isFlipped, onClick }) => {
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
