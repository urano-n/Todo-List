import { VStack, Input, Button, Box } from "@chakra-ui/react"
import { useEffect, useState,} from "react";

const Form = ({createTodo}) => {
  const [enterdTodo, setEnterdTodo] = useState("");
  const [enterdMemo, setEnterdMemo] = useState("");
  const [enterdTime, setEnterdTime] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    // enterdTodo が空の場合、「新規タスク」を設定
    const todoContent = enterdTodo === "" ? "新規タスク" : enterdTodo;

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: todoContent,
      time: enterdTime,
      memo: enterdMemo,
    };

    createTodo(newTodo);

    setEnterdTodo("");
    setEnterdMemo("");
    setEnterdTime("");
  }

  return (
    <VStack width="100%" marginBottom="20px">
      <Box as="form" onSubmit={addTodo} width="100%" maxWidth="600px">
        <VStack>
        <Input type="datetime-local" value={enterdTime} onChange={(e) => setEnterdTime(e.target.value) } />
        <Input placeholder="タイトル" variant="subtle" type="text" value={enterdTodo} onChange={(e) => setEnterdTodo(e.target.value) }/>
        <Input placeholder="メモ" variant="flushed" value={enterdMemo} onChange={(e) => setEnterdMemo(e.target.value) } />
        <Button variant="subtle" type="submit" aria-label="追加" alignSelf="flex-end">追加</Button>
        </VStack>
      </Box>
    </VStack>
  );
}

export default Form;