
import './App.css'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { Main } from './components/Main'
import { Subcontent } from './components/Subcontent'
import { Advertisement } from './components/advertisement'
function App() {


  return (
    <>
      <Header> </Header>
      <div style={{ display: "flex", justifyContent: "space-between", width: "95%" }}>

        <Navigation></Navigation>
        <Main>
          <Subcontent></Subcontent>
          <Subcontent></Subcontent>
          <Subcontent></Subcontent>
          <Advertisement></Advertisement>
        </Main>
      </div>

    </>
  )
}

export default App
