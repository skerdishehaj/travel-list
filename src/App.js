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
  const [items, setItems] = useState(initialItems);
  const handleGetItem = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };
  return (
    <div className="app">
      <Logo />
      <Form onGetItem={handleGetItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
