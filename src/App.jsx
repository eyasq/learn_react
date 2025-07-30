
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { SearchForm } from '../components/searchform'
import { SearchContext } from '../components/context'
import './App.css'

function App() {
  const [context, setContext] = useState(null);

  return (
    <>
      <SearchContext.Provider value={{ context, setContext }}>
        <SearchForm></SearchForm>

      </SearchContext.Provider>
    </>
  )
}

export default App
