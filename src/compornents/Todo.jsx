import { useState } from 'react';
import List from './List'
import Form from './Form'

const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: "お店の予約",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [ todos, setTodos ] = useState(todoList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <>
      <h1>TODOリスト</h1>
      <Form createTodo={createTodo}/>
      <List todos={todos} deleteTodo={deleteTodo}/>
    </>
  );
};

export default Todo;