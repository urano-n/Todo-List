import { IconButton } from "@chakra-ui/react"
import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@chakra-ui/react"
import {
  DialogCloseTrigger,
} from "./ui/dialog"
import { CgMathPlus } from "react-icons/cg";
import Form from './Form'

const TodoDialog = ({todos, setTodos}) => {

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <DialogRoot size="lg" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <IconButton aria-label="addTodo" variant="subtle" rounded="full" position="fixed" size="xl" border= "none" top="2%" right="5%" _hover={{ bgColor: "#eae876", borderColor: "#a3cacf" }} _focus={{ outline: "none" }}>
          <CgMathPlus color="#2b262c" />
        </IconButton>
      </DialogTrigger>
      <DialogContent  position="fixed" m="20px">
        <DialogHeader>
          <DialogTitle>タスクの追加</DialogTitle>
        </DialogHeader>
        <Form createTodo={createTodo}/>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}

export default TodoDialog;