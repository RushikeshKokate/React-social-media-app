import react from 'react'
import './App.css'
import { RouterProvider, Router } from 'react-router-dom'
import router from './routes'
import { UserAuthContextProvider } from './context/UserAuthContext'

interface AppProps {
  
}
const App: React.FC<AppProps>=()=> {
  return (
    <UserAuthContextProvider>
    <RouterProvider router={router}/>  
  </UserAuthContextProvider> 
  )
  
}

export default App
