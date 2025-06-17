import "./App.css";
import { flashcards } from "./data/cardContent";
import { FlashCardSet } from "./components/FlashCardSet";

function App() {
  return (
    <div className="app">
      <FlashCardSet
        cards={flashcards}
        title="Computer Science general knowledge"
        description="A flashcard set of Computer Science trivial questions"
      ></FlashCardSet>
    </div>
  );
}

export default App;
