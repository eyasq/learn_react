
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { SearchForm } from '../components/searchform'
import { SearchContext } from '../components/context'
import { Display } from '../components/display'
import './App.css'

function App() {
  const [context, setContext] = useState({});

  return (
    <>
      <SearchContext.Provider value={{ context, setContext }}>
        <SearchForm></SearchForm>
        <Display></Display>
      </SearchContext.Provider>
    </>
  )
}

export default App
