import { Todo } from "./utils";
import { Todo as SingleTodo } from "./Todo";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
