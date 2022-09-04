import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {motion} from "framer-motion"
import featured from '../../images/featured-image.webp'
import './style/docs.css'

const Docs = () => {
  const blackBox = {
    initial: {
      backgroundColor: "#5d6cf4",
      height: "100vh",
      bottom: 0
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
    className='docs'
    initial="initial"
    animate="animate"
    variants={blackBox}>
      <div className="docs-page">
        <Container>
          <Row>
            <Col className='left'>
              <h1>View All API Docs</h1>
              <h1>Crypto Wallet Infrastructure</h1>
              <h1>Global Fiat On/Off Ramp Rails</h1>
              <h1>Blockchain Connectivity</h1>
              <h1>Seamless Crypto Swaps</h1>
              <h1>Full KYC User Onboarding</h1>
            </Col>
            <Col className='right'>
              <div className="box">
                <motion.img src={featured} alt="featured"   
                drag
                dragConstraints={{ left: -50, right: 0, top: -50, bottom: 50 }} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </motion.section>
  )
}

export default Docs