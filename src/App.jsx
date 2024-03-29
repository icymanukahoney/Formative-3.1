import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ArticleContextProvider } from './context/ArticleContex'


//import of pages 
import Homepage from './pages/Homepage'
import About from './pages/About'

//import of components
import Header from './components/Header'
import Footer from './components/Footer'
import SingleArticle from './components/SingleArticle'
import Weather from './components/Weather'
import Jokes from './components/Jokes'


function App() {
  

  return (
  
    <HashRouter>
    <ArticleContextProvider>
    <Header /> {/* Add the header component here */}
    <Routes>
      {/* Set up individual routes */}
      <Route exact path='/' element={<Homepage />} />


      <Route path='/article/' element={<SingleArticle />}/>

      {/* Set up individual routes */}
      <Route path='/about' element={<About />} />

       {/* Add the weather route */}
       <Route path='/weather' element={<Weather />} />

       <Route path="/jokes" element={<Jokes />} /> 

      {/* Route for each additional page or component */}

      

    </Routes>
    <Footer /> {/* Add the footer component here */}
    </ArticleContextProvider>
  </HashRouter>

  )
}

export default App
