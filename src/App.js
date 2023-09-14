import PackingList from "./components/PackingList";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import Form from "./components/Form";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
