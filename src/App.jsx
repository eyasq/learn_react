
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from '../components/home'
import { Word } from '../components/word'
import { Styled } from '../components/styled_word'
function App() {
  //home page should display h1:Welcome
  //number route should display the number 
  //word route should display the word
  //styled word should display the word, styled /hello/blue/red = <p style={{color:"blue", backgroundColor:"red"}}
  return (
    <>
      <Routes>
        {/* use isNaN to check if word is word or num */}
        <Route path="/home" element={<Home />}></Route>
        <Route path='/:word' element={<Word />}></Route>
        <Route path='/:word/:color/:bgcolor' element={<Styled />}> </Route>
      </Routes>

    </>
  )
}

export default App
