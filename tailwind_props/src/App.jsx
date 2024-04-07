
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        TAILWIND TEST
      </h1>
      <Card username="chai or code" />
      <Card username="himan" />
    </>
  );
}

export default App;
