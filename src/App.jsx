import { useState } from 'react'
import './App.css'
import Menu from './components/menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Service from './components/service/Service';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      <Banner/>
      <About/>
      <Skills/>
      <Service/>
    </>
  )
}

export default App
