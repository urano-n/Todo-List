import { Box, VStack, Heading, Tabs, Center } from "@chakra-ui/react"
import { useState } from 'react'
import List from './List'
import TodoDialog from './TodoDialog'
import CompleteList from "./CompleteList"
import { CgCheck, CgClipboard } from "react-icons/cg"

const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: "お店の予約",
      time: "2025-02-13T12:00",
      memo: "焼肉",
    },
  ];

  const [ todos, setTodos ] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  // Todoの完了ボタンが押された時に完了リストに移動
  const completeTodo = (id) => {
    const taskToComplete = todos.find((todo) => todo.id === id);
    setTodos(todos.filter((todo) => todo.id !== id ));
    setCompletedTodos([...completedTodos, taskToComplete]);
  };

  // completeの完了ボタンが押された時にリストに戻す
  const returnTodo = (id) => {
    const returnToList = completedTodos.find((completedTodo) => completedTodo.id === id);
    setCompletedTodos(completedTodos.filter((completedTodo) => completedTodo.id !== id ));
    setTodos([...todos, returnToList]);
  };

  // Todoを削除する関数
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    const newCompleteTodos = completedTodos.filter((completedTodo) => {
      return completedTodo.id !== id;
    });

    setTodos(newTodos);
    setCompletedTodos(newCompleteTodos);
  }

  // Todoの内容を編集する関数
  const inputChange = ( id, field, e ) => {
    const changeTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, [field]: e.target.value };
      }
      return todo;
    });
    setTodos(changeTodos);
  }

  return (
    <Box bgColor="#eceaea">
      <VStack bgColor="#a3cacf" p="10" gap="8">
        <Heading as="h1" size="6xl" color="#000000">TODO LIST</Heading>
        <TodoDialog todos={todos} setTodos={setTodos}/>
      </VStack>
      <Center>
        <Tabs.Root defaultValue="Lists" justify="center" width="100%">
          <Tabs.List border="none" bgColor="white">
            <Tabs.Trigger value="Lists" bgColor="white" border="none" rounded="none" _focus={{ outline: "none" }} >
              <CgClipboard />
              Todo
            </Tabs.Trigger>
            <Tabs.Trigger value="Complete" bgColor="white" border="none" rounded="none" _focus={{ outline: "none" }} >
              <CgCheck />
              Complete
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="Lists">
            <List todos={todos} deleteTodo={deleteTodo} inputChange={inputChange} completeTodo={completeTodo}/>
          </Tabs.Content>
          <Tabs.Content value="Complete">
            <CompleteList completedTodos={completedTodos} deleteTodo={deleteTodo} inputChange={inputChange} returnTodo={returnTodo}/>
          </Tabs.Content>
        </Tabs.Root>
      </Center>
    </Box>
  );
};

export default Todo;