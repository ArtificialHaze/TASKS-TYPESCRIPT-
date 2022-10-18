import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Todo as TodoProps } from "./utils";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";

type Props = {
  todo: TodoProps;
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
};

export const Todo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const doneTask = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTask = (e: FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__todo" onSubmit={(e) => editTask(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__todo--text"
        />
      ) : todo.isDone ? (
        <s className="todos__todo--text">{todo.todo}</s>
      ) : (
        <span className="todos__todo--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <EditIcon />
        </span>
        <span className="icon" onClick={() => deleteTask(todo.id)}>
          <DeleteIcon />
        </span>
        <span className="icon" onClick={() => doneTask(todo.id)}>
          <CheckIcon />
        </span>
      </div>
    </form>
  );
};
