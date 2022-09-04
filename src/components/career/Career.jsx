import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { Parallax } from 'react-scroll-parallax';
import {motion} from "framer-motion"
import HorizontalScroll from 'react-scroll-horizontal'
import careers from '../../videos/careers.webm'
import zero from '../../videos/0.webm'
import one from '../../videos/1.webm'
import two from '../../videos/2.webm'
import three from '../../videos/3.webm'
import four from '../../videos/4.webm'
import statue from '../../images/Careers-SmallHero-Statue.webp'
import './style/career.css'

const Career = () => {
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
    className='career'
    initial="initial"
    animate="animate"
    variants={blackBox}>
      {/* start career page */}
      <section className="career-page">
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
                  <h1><span>BUILD THE</span> FUTURE<br/>WITH US</h1>
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
        {/* start postions */}
        <section className="positions">
          <div className="left-part">
            <video muted autoPlay loop>
              <source src={careers} type="video/webm" />
            </video>
          </div>
          <div className="right-part">
            <div className="content">
              <p>We’re looking for revolutionary thinkers with passion,<br/> ingenuity, and imagination to help us bring crypto to<br/> the masses. Up for the challenge?</p>
              <button className="cssbuttons-io-button"> VIEW OPEN POSITIONS
                <div className="icon">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                </div>
              </button>
            </div>
            <img src={statue} alt="statue" />
          </div>
        </section>
        {/* end postions */}
        {/* start text animation */}
        <section className="text-anime">
          <Parallax translateX={['100px', '-200px']}>
            <div>BUILD WITH THE BEST</div>
          </Parallax>
        </section>
        {/* end text animation */}
        {/* start horizontal */}
        <section className="horizontal">
          <HorizontalScroll 
              pageLock      = { true }
              reverseScroll = { true }
              config        = {{ stiffness: 5, damping: 2 }}>
                <div className='zero'>
                  <h6>01</h6>
                  <h1>WORK FROM ANYWHERE</h1>
                  <video muted autoPlay loop>
                    <source src={zero} type="video/webm" />
                  </video>
                  <p>Work from anywhere with an internet connection. We’re a remote-first company, so if you have passion and talent, we have a place for you.</p>
                </div>
                <div className='one'>
                  <h6>02</h6>
                  <h1>GET SKIN IN THE GAME</h1>
                  <video muted autoPlay loop>
                    <source src={one} type="video/webm" />
                  </video>
                  <p>Let’s win together. Wyre offers equity options to all employees, along with referral bonuses and 401(k) plans with corporate matching.</p>
                </div>
                <div className='two'>
                  <h6>03</h6>
                  <h1>KEEP YOUR MIND RIGHT</h1>
                  <video muted autoPlay loop>
                    <source src={two} type="video/webm" />
                  </video>
                  <p>We offer a monthly wellness stipend to all employees along with monthly virtual meditations and corporate access to Calm, the wellness app.</p>
                </div>
                <div className='three'>
                  <h6>04</h6>
                  <h1>TAKE TIME<br/> FOR YOU</h1>
                  <video muted autoPlay loop>
                    <source src={three} type="video/webm" />
                  </video>
                  <p>Building the future of finance is hard. We provide unlimited paid time off so you can recharge, stay motivated, and live your best life.</p>
                </div>
                <div className='four'>
                  <h6>05</h6>
                  <h1>HEALTHCARE ON LOCK</h1>
                  <video muted autoPlay loop>
                    <source src={four} type="video/webm" />
                  </video>
                  <p>You do your best when you feel your best. Wyre has you covered with health, dental, and vision benefits for US-based employees and their families.</p>
                </div>
          </HorizontalScroll>
        </section>
        {/* end horizontal */}
        {/* start greek */}
        <section className='greek'>
          <Container>
            <Row>
              <Col className='upper'>
                <div className="boxs">
                  <Parallax translateX={['-100px', '100px']}>
                    <div className="box-1">
                      <h1>Product</h1>
                    </div>
                  </Parallax>
                  <div className="box-2">
                    <Parallax translateX={['100px', '-100px']}>
                      <h1>Marketing</h1>
                    </Parallax>
                  </div>
                </div>
              </Col>
              <Col className='middle'>
                <div className="boxs">
                  <Parallax translateX={['-100px', '100px']}>
                    <div className="box-1">
                      <h1>Engineering</h1>
                    </div>
                  </Parallax>
                  <Parallax translateY={['-100px', '100px']}>
                    <div className="box-2">
                      <h1>Finance</h1>
                    </div>
                  </Parallax>
                  <Parallax translateX={['100px', '-100px']}>
                    <div className="box-3">
                      <h1>Customer Support</h1>
                    </div>
                  </Parallax>
                </div>
              </Col>
              <Col className='footer'>
                <div className="boxs">
                  <Parallax translateX={['-100px', '100px']}>
                    <div className="box-1">
                      <h1>Human Resources</h1>
                    </div>
                  </Parallax>
                  <Parallax translateX={['100px', '-100px']}>
                    <div className="box-2">
                      <h1>Legal, Risk & Fraud</h1>
                    </div>
                  </Parallax>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end greek */}
        {/* start accordation */}
        <section className="accordation">
          <Container>
            <Row>
              <Col className='left'>
                <h1>FAQ</h1>
              </Col>
              <Col className='right'>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>01&nbsp;&nbsp; Where is Wyre based?</Accordion.Header>
                    <Accordion.Body>
                    We are based in San Francisco, California. However, we’re a fully remote company with employees globally, so we encourage you to join us from wherever you are.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>02&nbsp;&nbsp; Can I work at Wyre if I’m not in the US?</Accordion.Header>
                    <Accordion.Body>
                    Yes, we hire internationally!
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>03&nbsp;&nbsp; Will my interview take place remotely?</Accordion.Header>
                    <Accordion.Body>
                    Yes! As a remote-first company, we conduct interviews via video through Google Meet.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>04&nbsp;&nbsp; How should I prepare for my interview?</Accordion.Header>
                    <Accordion.Body>
                    Please have a strong understanding of the role you’re interviewing for and be ready to speak about why you're interested in Wyre as well as the digital asset space. We ask behavioral interview questions, so please be prepared to share examples from your experience – and be ready to answer more technical questions if you’re pursuing an engineering opportunity. Don’t forget to come prepared with questions of your own. After all, this is also your opportunity to interview us!
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>05&nbsp;&nbsp; What should I wear for my interview?</Accordion.Header>
                    <Accordion.Body>
                    We recommend business casual, so we can focus on learning more about your experience and perspective.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end accordation */}
      </section>
      {/* end career page */}
    </motion.section>
  )
}

export default Career