import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import routes from './route/Routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>Hello world!!</div>
    </>
  )
}

export default App
