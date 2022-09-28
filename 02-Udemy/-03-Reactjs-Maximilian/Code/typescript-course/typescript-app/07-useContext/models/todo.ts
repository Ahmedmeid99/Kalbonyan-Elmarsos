class Todo {
  text: string;
  id: string;
  constructor(todoText: string) {
    this.text = todoText;
    this.id = `${todoText}${new Date().toISOString()}`;
  }
}
export default Todo;
