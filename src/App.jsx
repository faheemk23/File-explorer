import "./App.css";
import Explorer from "./components/Explorer/Explorer";
import explorer from "./data/data";

function App() {
  return (
    <>
      <Explorer explorer={explorer} />
    </>
  );
}

export default App;
