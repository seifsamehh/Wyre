import React , {useState, useEffect} from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { Offline, Online } from 'react-detect-offline';
import AnimatedCursor from "react-animated-cursor"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { About, Career, Docs, Header, Home, Login } from './components';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  // loading
  const [loading , setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
    },[])
  return (
    <>
    <AnimatedCursor color="121,134,250" innerSize={15} outerSize={10}/>
    {
      loading?
      <>
      <div className="loader">
        <h1>WYRE</h1>
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      </>
      :
      <>
      <Online>
        <Header/>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>} />
            <Route path='/docs' element={<Docs/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/career' element={<Career/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </AnimatePresence>
      </Online>
      <Offline>
        <div className="offline-page">
          <div class="text">
            <span>Y</span>
            <span>O</span>
            <span>U</span>
            <span></span>
            <span>A</span>
            <span>R</span>
            <span>E</span>
            <span></span>
            <span>O</span>
            <span>F</span>
            <span>F</span>
            <span>L</span>
            <span>I</span>
            <span>N</span>
            <span>E</span>
          </div>
          <div className="button-borders">
            <button className="primary-button" onClick={() => window.location.reload(false)}> RELOAD</button>
          </div>
        </div>
      </Offline>
      </>
    }
    </>
  )
}

export default App
