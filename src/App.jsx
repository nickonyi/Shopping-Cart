import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import routes from './route/Routes'


function App() {
  

  const router = createBrowserRouter(routes)

  return (
    <>
     <RouterProvider router={router} />
    </>
  
  )
}

export default App
