import { FormEvent, useRef } from "react";

export type TodoProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTask: (e: FormEvent) => void;
};

const Input = ({ todo, setTodo, addTask }: TodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        addTask(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Type here.."
        className="input__box"
      />
      <button className="input__submit">Submit</button>
    </form>
  );
};

export default Input;
