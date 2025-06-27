type CardsControlProps = {
  onNext: () => void;
  onBack: () => void;
  disableNext: boolean;
  disableBack: boolean;
};

const CardsControl = ({
  onNext,
  onBack,
  disableNext,
  disableBack,
}: CardsControlProps) => {
  return (
    <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
      <button
        onClick={onBack}
        disabled={disableBack}
        style={{ opacity: disableBack ? 0.5 : 1 }}
      >
        Back
      </button>
      <button
        onClick={onNext}
        disabled={disableNext}
        style={{ opacity: disableNext ? 0.5 : 1 }}
      >
        Next
      </button>
    </div>
  );
};

export default CardsControl;
