import React from 'react'
import {motion} from "framer-motion"
import login from '../../images/login.webp'
import './style/login.css'

const Login = () => {
  const blackBox = {
    initial: {
      backgroundColor: "#5d6cf4",
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  return (
    <motion.section 
    className='login'
    initial="initial"
    animate="animate"
    variants={blackBox}>
      <section className="login-page">
        <div className="left">
          <img src={login} alt="login" />
        </div>
        <div className="right">
          <h1>WELCOME!</h1>
          <div class="group">
            <input required type="email" className="input"/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>EMAIL</label>
          </div>
          <div class="group">
            <input required minLength="0" maxLength="10" type="password" className="input"/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>PASSWORD</label>
          </div>
          <button>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </div>
      </section>
    </motion.section>
  )
}

export default Login