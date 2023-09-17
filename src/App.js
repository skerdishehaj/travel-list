import PackingList from "./components/PackingList";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import Form from "./components/Form";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 6, packed: true },
];

function App() {
  // State to hold the items
  const [items, setItems] = useState(initialItems);

  // Function to add an item
  const handleGetItem = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  // Function to delete an item
  const handleDeleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="app">
      <Logo />
      <Form onGetItem={handleGetItem} />
      <PackingList onDeleteItem={handleDeleteItem} items={items} />
      <Stats />
    </div>
  );
}

export default App;
