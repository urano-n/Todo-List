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

  return (
    <Box bgColor="#eceaea">
      <VStack bgColor="#a3cacf" p="10" gap="8">
        <Heading as="h1" size="6xl" color="#000000">TODO LIST</Heading>
        <Demo todos={todos} setTodos={setTodos}/>
      </VStack>
      <List todos={todos} deleteTodo={deleteTodo}/>
    </Box>
  );
};

export default Todo;