import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
import './style/header.css'

const Header = () => {
  return (
    <header id='header'>
        <Container>
            <Row>
                <Col className='logo'>
                    <Link to="/">
                        <span>
                            <svg viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m42.6 16.4 3-7.1V4.6H19.8L4.9 41H9l17.2-24.6h16.3Z" fill="#FFFFFA"></path><path d="M53.8 19.1H28L13 55.4h4.3l18-23.3h14.9l3.5-8.3V19Z" fill="#FFFFFA"></path><path d="m56 30.3 2.4-5.6V14.5h-10l1.8-4.3V0H16.8L0 40.6v9.7h10.2l-2 4.6v9.4l27.9-.1h9.6L65.3 39v-8.8H56Zm7.4 8.1-18.6 24H10.1v-7.1l2.9-7H1.9V41L18 1.9h30.3v8l-2.7 6.4h11v8l-3.3 7.8h10.1v6.3Z" fill="#FFFFFA"></path></svg><svg viewBox="0 0 261 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m126.8 10.6-4 18.7-.2 2.4v9h-4.3v-8.5c0-1-.1-2-.4-3l-5.2-18.6h-10.6L97 29c-.3 1-.4 2-.4 3v8.6h-4.3v-8.8c0-.8 0-1.5-.2-2.3l-4-18.9H77.2v1.2l10 38.2h12.1l5.3-18.9c.3-1 .5-2 .5-3v-8h4.2v8c0 1 .2 2 .4 3l5.4 19h12.1l10-38.3v-1.2h-10.5Z" fill="#171717"></path><path d="M260.1 28.9c0-12.1-7.2-19.2-19.2-19.2-10 0-17.3 4.7-19.5 14a3 3 0 0 0 2.9 3.8h4.8v4.2H224a3 3 0 0 0-3 3.5c1.8 10.5 9.3 15.7 20 15.7 12.3 0 17.1-7 18.4-12.4v-1h-9.6c-.6 2.3-3 5.3-9 5.3s-9.4-4-9.6-9.4h29v-4.5Zm-28.7-3c.4-4.4 3.5-8.1 9.4-8.1 6 0 9 3.6 9 8h-18.4Z" fill="#171717"></path><path d="M212.2 10.5c-5 0-8.3 4.7-10 9.7h-4.7s4-5 4.4-9.6h-10.7V50h11V29.5c0-7 3-10 9.1-10h5.7v-9h-4.8Z" fill="#171717"></path><path d="m173.8 10.6-7.3 20.5c-.4 1.2-.7 2.4-.7 3.7v5.8h-4.2v-5.8a11 11 0 0 0-.7-3.7l-7.2-20.4h-11.5v1l14 34.7h4.1l-1.9 5h-12.2V61H158a10.6 10.6 0 0 0 9.8-6.6L185 11.8v-1.2h-11.2Z" fill="#171717"></path><path d="m51.4 30.2 3.3-7.7v-8h-11L46.4 8V0H16.2L0 39.1v7.4h11.1l-2.9 7v7H43l18.6-24v-6.2H51.4ZM52 22l-3.5 8.3H33.6l-18 23.3h-4.4l15-36.2H52V22ZM18 2.8h25.7v4.6l-3 7-16.3.1L7.3 39.2H3L18 2.8Z" fill="#171717"></path></svg>
                        </span>
                    </Link>
                </Col>
                <Col className='links'>
                    <nav>
                        <Link to="/docs" className="link link--leda" data-text="Docs">
						    <span>Docs</span>
					    </Link>
                        <Link to="/about" className="link link--leda" data-text="About">
						    <span>About</span>
					    </Link>
                        <Link to="/career" className="link link--leda" data-text="Career">
						    <span>Career</span>
					    </Link>
                        <Link to="/login" className="link link--leda" data-text="Login">
						    <span>Login</span>
					    </Link>
                    </nav>
                </Col>
                <Col className='button'>
                <a class="fancy" href="#">
                    <span class="top-key"></span>
                    <span class="text">Get Started</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </a>
                </Col>
            </Row>
        </Container>
    </header>
  )
}

export default Header