import './App.css'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Container from './Container/Container'
import Content from './Content/Content'
import Slider from './Slider/Slider'
import Footer from './Footer/Footer'
import About from './About/About'

function App() {

  return (
    <>
      <div className='min-w-screen h-screen'>
        <Navbar/>
        <Header/>
        <Container/>
        <Content/>
        <Slider/>
        <Footer/>
        <About/>
      
      </div>    
    
    </>
  )
}

export default App
