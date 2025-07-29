
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { Navbar } from '../components/nav'
import { MyContext } from './context/context'
import { Form } from '../components/form'
import './App.css'

function App() {
  const [name, setName] = useState("")

  return (
    <>
      <MyContext.Provider value={{ name, setName }}>
        <Navbar></Navbar>
        <Form></Form>


      </MyContext.Provider>
    </>
  )
}

export default App
