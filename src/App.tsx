import { FormEvent, useState } from "react";
import "./App.css";
import Input from "./Input";
import TodoList from "./TodoList";
import { Todo } from "./utils";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = (e: FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Tasky</span>
      <Input addTask={addTask} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
