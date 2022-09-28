import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";
const todos = [
  new Todo("react"),
  new Todo("js"),
  new Todo("typescript"),
  new Todo("scss"),
];
function App() {
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
