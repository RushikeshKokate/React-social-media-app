import react from 'react'
import './App.css'
import { RouterProvider, Router } from 'react-router-dom'
import router from './routes'

interface AppProps {
  
}
const App: React.FC<AppProps>=()=> {
  return <RouterProvider router={router}/>  
}

export default App
