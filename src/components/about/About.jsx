import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Parallax } from 'react-scroll-parallax';
import coin1 from '../../images/Coin-01.webp'
import coin2 from '../../images/Coin-02.webp'
import coin3 from '../../images/Coin-03.webp'
import coliseum from '../../images/coliseum.webp'
import about from '../../images/About-Statue.webp'
import ceo from '../../images/ceo.webp'
import chief from '../../images/chief.webp'
import general from '../../images/general.webp'
import head from '../../images/head.webp'
import {motion} from "framer-motion"
import './style/about.css'

const About = () => {
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
    className='about'
    initial="initial"
    animate="animate"
    variants={blackBox}>
      <div className="about-page">
        {/* start text */}
        <div className="text">
        <Container>
          <Row>
            <Col className='upper'>
              <div className="box-1"></div>
              <div className="box-2"></div>
            </Col>
            <Col className='middle'>
              <Parallax translateY={[-100, 100]}>
                <h1>WYRE <span>IS</span> THE <span>CRYPTO</span> STACK FOR <span>THE</span> NEW <span>ECONMY</span></h1>
              </Parallax>
            </Col>
            <Col className='bottom'>
              <div className="box-3"></div>
              <div className="box-4"></div>
            </Col>
          </Row>
        </Container>
        </div>
        {/* end text */}
        {/* start rise */}
        <section className="rise">
          <Container>
            <Row>
              <Col className='content'>
                <Parallax translateX={['100px', '-200px']}>
                  <div className="box">
                    <img src={coin3} alt="coin 3" />
                    <p>The rise of the crypto economy promises a world<br/> where everyone has access to open and secure<br/> financial systems. But this future isn’t guaranteed,<br/> the bridge to this new world must be built.</p>
                  </div>
                </Parallax>
              </Col>
              <Col className='image'>
                <div className="container">
                  <img src={coin2} alt="coin 2" />
                  <img src={coin1} alt="coin 1" />
                  <img src={coliseum} alt="coliseum" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end rise */}
        {/* start future */}
        <section className="future">
          <Container>
            <Row>
              <Col className='left'>
                <Parallax translateX={['100px', '-50px']}>
                  <h1><span>BUILDING</span> THE</h1>
                </Parallax>
                <Parallax translateX={['-10px', '200px']}>
                  <h1> FUTURE, <span>TODAY</span></h1>
                </Parallax>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end future */}
        {/* start power */}
        <section className="power">
          <Container>
            <Row>
              <Col className='left'>
                <img src={about} alt="about statue" />
              </Col>
              <Col className='right'>
                <Parallax translateX={['80px', '-80px']}>
                  <p>We believe that the power<br/> belongs in the hands of the builders –<br/> and that with the right tools, they can<br/> build anything. So we do whatever it<br/> takes to make them, every day. We’re<br/> all-in on helping the builders because if<br/> they win, we all win.</p>
                </Parallax>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end power */}
        <article>
          {/* start wyre */}
          <section className="wyre">
            <Container>
              <Row>
                <Col className='upper'>
                  <h1>The Wyre Way <sup>05</sup></h1>
                </Col>
                <Col className='middle'>
                  <h1>Crypto</h1>
                  <p>We salute the explorers who immerse themselves in<br/> the crypto ecosystem, who understand that curiosity<br/> is the engine of achievement, and who never stop<br/> learning.</p>
                </Col>
              </Row>
            </Container>
          </section>
          {/* end wyre */}
          {/* start leadership */}
          <section className="leadership">
            <Container>
              <Row>
                <Col className='heading'>
                  <h1>LEADERSHIP</h1>
                </Col>
                <Col className='members'>
                  {/* ceo */}
                  <div className="ceo">
                    <img src={ceo} alt="ceo" />
                    <h5>Yanni Giannaros</h5>
                    <h6>CO-FOUNDER & CEO</h6>
                  </div>
                  {/* chief */}
                  <div className="chief">
                    <img src={chief} alt="chief" />
                    <h5>Stephen Cheng</h5>
                    <h6>CHIEF COMPLIANCE OFFICER</h6>
                  </div>
                  {/* general */}
                  <div className="general">
                    <img src={general} alt="general" />
                    <h5>Debra Noll</h5>
                    <h6>GENERAL COUNSEL</h6>
                  </div>
                  {/* head */}
                  <div className="head">
                    <img src={head} alt="head" />
                    <h5>Sam Schlachter</h5>
                    <h6>HEAD OF ENGINEERING</h6>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* end leadership */}
        </article>
      </div>
    </motion.section>
  )
}

export default About