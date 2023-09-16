import { useState } from "react";
import FlashCard from "./FlashCard";

function FlashCards({ questions }) {
  const [idSelected, setIdSelected] = useState(null);
  const handleOnClick = (id) => {
    setIdSelected((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <FlashCard
          key={question.id}
          data={questions}
          idSelected={idSelected}
          onClick={handleOnClick}
        />
      ))}
    </div>
  );
}
export default FlashCards;
