import { useState } from "react"
import { Stack, Card, IconButton, Center, AbsoluteCenter, Box, Text, VStack, Input } from "@chakra-ui/react"
import { CgClose, CgCheck } from "react-icons/cg"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "./ui/accordion"
import FormatDate from "./FormatDate"

const List = ({todos, deleteTodo, inputChange}) => {

  const complete = (id) => {
    deleteTodo(id)
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
                      <AccordionItemTrigger indicatorPlacement="start">
                        <Stack>
                        <Input textAlign="left" value={todo.content} onChange={(e) => inputChange(todo.id, e)} />
                        {todo.time && <Text >{FormatDate(todo.time)}</Text>}
                        </Stack>
                      </AccordionItemTrigger>
                      <AbsoluteCenter axis="vertical" insetEnd="0" mr="8px">
                        <IconButton  aria-label="完了"variant="subtle" colorPalette="blue" onClick ={ () => complete(todo.id)} ><CgCheck /></IconButton>
                        <IconButton aria-label="削除" variant="subtle" colorPalette="red" onClick ={ () => complete(todo.id)} ><CgClose /></IconButton>
                      </AbsoluteCenter>
                    </Box>
                    {todo.memo && <AccordionItemContent  p="16px">{todo.memo}</AccordionItemContent>}
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