import { useState } from 'react'
import './App.css'
import Menu from './components/menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/banner/Banner';
import About from './components/about/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      <Banner/>
      <About/>
    </>
  )
}

export default App
