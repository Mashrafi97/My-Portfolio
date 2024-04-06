import { useState } from 'react'
import './App.css'
import Menu from './components/menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Service from './components/service/Service';
import Blog from './components/blog/Blog';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      <Banner/>
      <About/>
      <Skills/>
      <Service/>
      <Blog/>
      <Portfolio/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
