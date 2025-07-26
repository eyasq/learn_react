import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SomeFunctionlComponent from './components/SomeFunc'
import PersonCard from './components/person'
function App() {
  const [count, setCount] = useState(0)
  // const props = {
  //   "firstName": "Bill",
  //   "lastName": "Justice",
  // }
  const people = [
    { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
    { firstName: "John", lastName: "Smith", age: 76, hairColor: "Brown" },
    { firstName: "Millard", lastName: "Fillmore", age: 35, hairColor: "Brown" },
    { firstName: "Maria", lastName: "Smith", age: 50, hairColor: "Brown" }
  ]

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <PersonCard people={people} />
      <SomeFunctionlComponent />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
