
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
    <h1>REACT WITH HIMAN</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App