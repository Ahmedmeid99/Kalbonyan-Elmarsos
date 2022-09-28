import "./App.css";
import Todos from "./components/Todos";
function App() {
  return (
    <div>
      <Todos items={["react", "js", "typescript", "css"]} />
    </div>
  );
}

export default App;
