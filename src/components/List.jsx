import { Stack, Card, IconButton, Center, AbsoluteCenter, Box, Input, Textarea } from "@chakra-ui/react"
import { CgCheck, CgTrash } from "react-icons/cg"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "./ui/accordion"

const List = ({todos, deleteTodo, inputChange, completeTodo }) => {

  const handleDelete = (id) => {
    deleteTodo(id)
  }

  const handleComplete = (id) => {
    completeTodo(id)
  }

  return (
    <Center>
      <Stack width="100%" maxWidth="600px" p="5">
        {todos.map(todo => {
          return (
            <Card.Root key={todo.id} >
              <Card.Body gap="2" p="0px">
                <AccordionRoot spaceY="4" variant="plain" collapsible defaultValue={["b"]}>
                  <AccordionItem key={todo.id} value={todo.value}>
                    <Box position="relative">
                      <AccordionItemTrigger indicatorPlacement="start" _focus={{ outline: "none" }} _hover={{ borderColor: "white" }}>
                        <IconButton aria-label="完了" variant="subtle" rounded="full" color="white" border= "none" bgColor="#cccccc" _hover={{ bgColor: "#a3cacf" }} onClick ={ () => handleComplete(todo.id)} ><CgCheck /></IconButton>
                        <Stack>
                        <Input textAlign="left" border="none" fontWeight="bold" height="fit-content" placeholder="タイトルを追加" _focus={{ outline: "none" }} value={todo.content} onChange={(e) => inputChange(todo.id, 'content', e)} />
                        <Input type="datetime-local" textAlign="left" border="none" textStyle="xs" height="fit-content" width="fit-content" _focus={{ outline: "none" }} value={todo.time} onChange={(e) => inputChange(todo.id, 'time', e)} />
                        </Stack>
                      </AccordionItemTrigger>
                      <AbsoluteCenter axis="vertical" insetEnd="0" mr="8px">
                        <IconButton aria-label="削除" variant="subtle" rounded="full" color="black" border= "none" _hover={{ borderColor: "#cfa3a3", }} _focus={{ outline: "none" }} onClick ={ () => handleDelete(todo.id)} ><CgTrash /></IconButton>
                      </AbsoluteCenter>
                    </Box>
                    {todo.memo ? (
                    <AccordionItemContent  p="16px">
                      <Textarea textAlign="left" border="none" _focus={{ outline: "none" }} height="fit-content" value={todo.memo} onChange={(e) => inputChange(todo.id, 'memo', e)} />
                    </AccordionItemContent>
                    ):(
                    <AccordionItemContent  p="16px">
                      <Textarea textAlign="left" border="none" _focus={{ outline: "none" }} height="fit-content" placeholder="メモを追加" value={todo.memo} onChange={(e) => inputChange(todo.id, 'memo', e)} />
                    </AccordionItemContent>
                    )}
                  </AccordionItem>
               </AccordionRoot>
              </Card.Body>
            </Card.Root>
          )
        })}
      </Stack>
    </Center>
  );
}

export default List;