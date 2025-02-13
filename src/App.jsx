import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Todo from './components/Todo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider value={defaultSystem}>
      <Todo />
    </ChakraProvider>
  )
}

export default App;

