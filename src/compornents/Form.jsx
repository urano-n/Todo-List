import { useState } from "react";

const Form = ({createTodo}) => {
  const [enterdTodo, setEnterdTodo] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enterdTodo,
    };

    createTodo(newTodo);

    setEnterdTodo("");
  }
  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" value={enterdTodo} onChange={(e) => setEnterdTodo(e.target.value) }/>
        <button onClick={addTodo}>追加</button>
      </form>
    </div>
  );
}

export default Form;