import { Box, VStack, Heading } from "@chakra-ui/react"
import { useState } from 'react'
import List from './List'
// import Form from './Form'
import Demo from './Demo'

const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: "お店の予約",
      time: "",
      memo: "焼肉",
    },
  ];

  const [ todos, setTodos ] = useState(todoList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  // Todoの内容を編集する関数
  const inputChange = ( id, e ) => {
    const changeTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, content: e.target.value };
      }
      return todo;
    });
    setTodos(changeTodos);
  }

  return (
    <Box bgColor="#eceaea">
      <VStack bgColor="#a3cacf" p="10" gap="8">
        <Heading as="h1" size="6xl" color="#000000">TODO LIST</Heading>
        <Demo todos={todos} setTodos={setTodos}/>
      </VStack>
      <List todos={todos} deleteTodo={deleteTodo} inputChange={inputChange}/>
    </Box>
  );
};

export default Todo;