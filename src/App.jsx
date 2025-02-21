import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import './App.css'

import Todo from './components/Todo';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Todo />
    </ChakraProvider>
  )
}

export default App;

