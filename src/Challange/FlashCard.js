function FlashCard({ data, idSelected, onClick }) {
  const isSelected = idSelected === data.id;
  return (
    <div
      onClick={() => {
        onClick(data.id);
      }}
      className={isSelected ? "selected" : ""}
    >
      <p>{!isSelected ? data.question : data.answer}</p>
    </div>
  );
}

export default FlashCard;
