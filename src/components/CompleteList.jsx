import FormatDate from "./FormatDate"
import { Stack, Card, IconButton, Center, AbsoluteCenter, Box, Text } from "@chakra-ui/react"
import { CgCheck, CgTrash } from "react-icons/cg"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "./ui/accordion"

const CompleteList = ({completedTodos, deleteTodo, returnTodo}) => {

  const handleDelete = (id) => {
    deleteTodo(id)
  }

  const handleReturn = (id) => {
    returnTodo(id)
  }

  return (
    <Center>
      <Stack width="100%" maxWidth="600px" p="5">
        {completedTodos.map(completedTodo => {
          return (
            <Card.Root key={completedTodo.id} >
              <Card.Body gap="2" p="0px">
                <AccordionRoot spaceY="4" variant="plain" collapsible defaultValue={["b"]}>
                  <AccordionItem key={completedTodo.id} value={completedTodo.value}>
                    <Box position="relative">
                      <AccordionItemTrigger indicatorPlacement="start" _focus={{ outline: "none" }} _hover={{ borderColor: "white" }}>
                        <IconButton aria-label="リストへ戻す" variant="subtle" rounded="full" color="white" border= "none" bgColor= "#a3cacf" _hover={{ bgColor: "#cccccc" }} onClick ={ () => handleReturn(completedTodo.id)} ><CgCheck /></IconButton>
                        <Stack>
                        {completedTodo.content ? (
                          <Text textAlign="left" textStyle="sm" fontWeight="bold" height="fit-content">{completedTodo.content}</Text>
                        ):(
                          <Text textAlign="left" textStyle="sm" fontWeight="bold" height="fit-content">タイトルを追加</Text>
                        )}
                        {completedTodo.time ? (
                          <Text textAlign="left" textStyle="xs" height="fit-content" width="fit-content">{FormatDate(completedTodo.time)}</Text>
                        ):(
                          <Text textAlign="left" textStyle="xs" height="fit-content" width="fit-content">年/月/日 --:--</Text>
                        )}
                        </Stack>
                      </AccordionItemTrigger>
                      <AbsoluteCenter axis="vertical" insetEnd="0" mr="8px">
                        <IconButton aria-label="削除" variant="subtle" rounded="full" color="black" border= "none" _hover={{ borderColor: "#cfa3a3"  }} _focus={{ outline: "none" }} onClick ={ () => handleDelete(completedTodo.id)} ><CgTrash /></IconButton>
                      </AbsoluteCenter>
                    </Box>
                    {completedTodo.memo ? (
                    <AccordionItemContent  p="16px">
                      <Text textAlign="left" textStyle="sm" height="fit-content">{completedTodo.memo}</Text>
                    </AccordionItemContent>
                    ):(
                    <AccordionItemContent  p="16px">
                      <Text textAlign="left" textStyle="sm" height="fit-content" >メモを追加</Text>
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

export default CompleteList;