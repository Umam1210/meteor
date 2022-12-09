import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Main from './pages/Main'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import AddBook from './components/admin/AddBook'

function App() {
  let navigate = useNavigate()
  // useEffect(() => {
    
  // if(user && user.role =="admin"){
  //   navigate('/add-book')
  // }
  
  // }, [])
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add-book' element={<AddBook />} />
      </Routes>
    </>
  )
}

export default App
