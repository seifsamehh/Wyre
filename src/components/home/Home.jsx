import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Parallax } from 'react-scroll-parallax';
import {motion} from "framer-motion"
import homeVideo from '../../videos/home.webm'
import one from '../../videos/one.webm'
import two from '../../videos/two.webm'
import three from '../../videos/three.webm'
import four from '../../videos/four.webm'
import five from '../../videos/five.webm'
import rings from '../../videos/Rings.webm'
import prefooter from '../../videos/PreFooter.webm'
import bitpay from '../../images/bitpay-logo.svg'
import ledger from '../../images/ledger-logo.svg'
import metamask from '../../images/metamask-logo.svg'
import rarible from '../../images/rarible-logo.svg'
import algorand from '../../images/algorand-logo.svg'
import avalanche from '../../images/avalanche-logo.svg'
import bitcoin from '../../images/bitcoin-logo.svg'
import flow from '../../images/flow-logo.svg'
import loopring from '../../images/loopring-logo.svg'
import ethereum from '../../images/ethereum-logo.svg'
import brave from '../../images/brave-logo.svg'
import crypto1 from '../../images/Crypto_On-ramp_1.webp'
import crypto2 from '../../images/Crypto_Rewards_1.webp'
import crypto3 from '../../images/Crypto_Wallet_1.webp'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { BsArrowUpSquare } from "react-icons/bs";
import { Scrollchor, linear } from 'react-scrollchor';
import './style/home.css'

const Home = () => {
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
    className='home'
    initial="initial"
    animate="animate"
    variants={blackBox}>
      {/* start home page */}
      <section className='homepage'>
        <Container>
          <Row>
            <Col className='upper'>
              <div className="box-1"></div>
              <div className="box-2"></div>
            </Col>
            <Col className='middle'>
              <Parallax translateY={[-50, 50]}>
                <h1>WYRE <span>IS</span> THE <span>CRYPTO</span> STACK FOR <span>THE</span> NEW <span>ECONMY</span></h1>
              </Parallax>
            </Col>
            <Col className='bottom'>
              <div className="box-3"></div>
              <div className="box-4"></div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end home page */}
      {/* start video */}
      <section className="video">
        <video autoPlay loop muted>
          <source src={homeVideo} type="video/webm" />
        </video>
        <div className="video-box">
          <Parallax translateY={[-50, 50]}>
            <p>We put the power in your hands with easy-to-use APIs that you can use to mesmerize your users with simple and secure crypto-fiat experiences.</p>
            <div className="buttons">
              <button className="btn"> Get Started</button>
            </div>
          </Parallax>
        </div>
      </section>
      {/* end video */}
      {/* start logos */}
      <section className="logos">
        <Container>
          <Row>
            {/* first logo */}
            <Col>
              <img src={bitpay} alt="bitpay" />
            </Col>
            {/* second logo */}
            <Col>
              <img src={ledger} alt="ledger" />
            </Col>
            {/* third logo */}
            <Col>
              <img src={metamask} alt="metamask" />
            </Col>
            {/* fourth logo */}
            <Col>
              <img src={rarible} alt="rarible" />
            </Col>
            {/* fifth logo */}
            <Col>
              <img src={brave} alt="brave" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* end logos */}
      {/* start tools */}
      <section className="tools">
        <Container>
          <Row>
            <Col className='left-part'>
              <p>Our powerful payment APIs are built to<br/> scale with you from day one to millions<br/> of users. Let's start building.</p>
              <button className="btn"> Get Started</button>
            </Col>
            <Col className='right-part'>
                <Parallax translateX={['50px', '-50px']}>
                  <h1><span>TOOLS</span> TO</h1>
                </Parallax>
                <br/>
                <Parallax translateX={['70px', '-70px']}>
                  <h1>BUILD YOUR</h1>
                </Parallax>
                <br/>
                <Parallax translateX={['100px', '-100px']}>
                  <h1><span>VISION</span></h1>
                </Parallax>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end tools */}
      <article>
      {/* start category one */}
      <section className="category-one">
        <Container>
          <Row>
            <Col className='content'>
              <h1>01</h1>
              <h4>MANAGE CRYPTO WITHIN YOUR APP</h4>
              <p>Create custodial wallets for your users and your business. Our white label wallets can hold both fiat and cryptocurrencies, and their custodial nature enables cheap, fast, and secure transactions. Supercharge your wallets to collect rewards with the option to split the benefits between your business and your users, unlocking a powerful way to increase user satisfaction and boost your bottom line.</p>
              <button className="btn"> EXPLORE DOCUMENTATION</button>
            </Col>
            <Col className='video-part'>
              <h1>Crypto Wallet Infrastructure</h1>
              <video muted autoPlay loop>
                <source src={one} type="video/webm" />
              </video>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end category one */}
      {/* start category two */}
      <section className="category-two">
        <Container>
          <Row>
            <Col className='content'>
              <h1>02</h1>
              <h4>PAY AND GET PAID IN EVERY WAY</h4>
              <p>Whether you’re dealing with card payments and banks, or blockchains and cryptocurrencies, Wyre lets you and your users transact on a global scale with ease. With the world’s most popular payment methods, Wyre’s payment rails offer frictionless transactions with just about any currency around the globe – including crypto – and our dense network of global payout rails helps you send payouts easily.</p>
              <button className="btn"> EXPLORE DOCUMENTATION</button>
            </Col>
            <Col className='video-part'>
              <h1>Global Fiat On/Off Ramp Rails</h1>
              <video muted autoPlay loop>
                <source src={two} type="video/webm" />
              </video>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end category two */}
      {/* start category three */}
      <section className="category-three">
        <Container>
          <Row>
            <Col className='content'>
              <h1>03</h1>
              <h4>CHOOSE YOUR PREFERRED BLOCKCHAIN</h4>
              <p>Hassle-free connectivity brings your product and users the benefits of blockchain and allows you to focus on the customer experience instead of backend infrastructure. Lean on Wyre’s blockchain infrastructure to instantly be connected to our partner blockchains. You can transfer assets on- and off-chain within your own interface, built and powered by our APIs, and bypass the complexity of interacting with the blockchain.</p>
              <button className="btn"> EXPLORE DOCUMENTATION</button>
            </Col>
            <Col className='video-part'>
              <h1>Blockchain Connectivity</h1>
              <video muted autoPlay loop>
                <source src={three} type="video/webm" />
              </video>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end category three */}
      {/* start category four */}
      <section className="category-four">
        <Container>
          <Row>
            <Col className='content'>
              <h1>04</h1>
              <h4>MOVE MONEY EVERYWHERE, EASILY</h4>
              <p>Swap crypto across different blockchains without relying on complicated third-party exchanges. Enable seamless and fully compliant transactions for your users without them having to leave your interface – making swaps faster, easier, and more secure while staying true to your brand. When we add more assets to the Swaps API, your users will automatically get access to them.</p>
              <button className="btn"> EXPLORE DOCUMENTATION</button>
            </Col>
            <Col className='video-part'>
              <h1>Seamless Crypto Swaps</h1>
              <video muted autoPlay loop>
                <source src={four} type="video/webm" />
              </video>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end category four */}
      {/* start category five */}
      <section className="category-five">
        <Container>
          <Row>
            <Col className='content'>
              <h1>05</h1>
              <h4>BUILD WITH PEACE OF MIND</h4>
              <p>Want to onboard your users safely, frictionlessly, and compliantly? Let us handle the risk and compliance issues so you can focus on building great products. Wyre’s APIs take care of the heavy lifting required with KYC/B, onboarding users, transaction monitoring, and transaction underwriting – saving you time and frustration, so you can grow your business quickly.</p>
              <button className="btn"> EXPLORE DOCUMENTATION</button>
            </Col>
            <Col className='video-part'>
              <h1>Full KYC User Onboarding</h1>
              <video muted autoPlay loop>
                <source src={five} type="video/webm" />
              </video>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end category five */}
      </article>
      <article className='part-2'>
        {/* start cards */}
        <section className='cards'>
          <Container>
            <div className="box">
              {/* card 1 */}
              <div className="card">
                <div className="imgBx">
                    <img src={algorand} alt="images"/>
                </div>
                <div className="details">
                    <h4>VIEW PROTOCOL DOCS</h4>
                </div>
              </div>
              {/* card 2 */}
              <div className="card">
                <div className="imgBx">
                    <img src={avalanche} alt="images"/>
                </div>
                <div className="details">
                    <h4>VIEW PROTOCOL DOCS</h4>
                </div>
              </div>
              {/* card 3 */}
              <div className="card">
                <div className="imgBx">
                    <img src={bitcoin} alt="images"/>
                </div>
                <div className="details">
                    <h4>VIEW PROTOCOL DOCS</h4>
                </div>
              </div>
              {/* card 4 */}
              <div className="card">
                <div className="imgBx">
                    <img src={flow} alt="images"/>
                </div>
                <div className="details">
                    <h4>VIEW PROTOCOL DOCS</h4>
                </div>
              </div>
              {/* card 5 */}
              <div className="card">
                <div className="imgBx">
                    <img src={loopring} alt="images"/>
                </div>
                <div className="details">
                    <h4>VIEW PROTOCOL DOCS</h4>
                </div>
              </div>
              {/* card 6 */}
              <div className="card">
                <div className="imgBx">
                    <img src={ethereum} alt="images"/>
                </div>
                <div className="details">
                    <h4>VIEW PROTOCOL DOCS</h4>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* end cards */}
        {/* start page two */}
        <section className="page-two">
          <Container>
            <Row>
              <Col className='upper'>
                <div className="box-1"></div>
                <div className="box-2"></div>
              </Col>
              <Col className='middle'>
                <Parallax translateY={[-100, 0]}>
                  <h1><span>CRYPTO-POWERED</span><br/>PAYMENTS<br/><span>INFRASTRUCTURE</span></h1>
                </Parallax>
              </Col>
              <Col className='bottom'>
                <div className="box-3"></div>
                <div className="box-4"></div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end page two */}
        {/* start options */}
        <section className="options">
        <Container>
          <Row>
            <Col className='left-part'>
              <h1>Global Reach</h1>
              <h1>Multi-Currency</h1> 
              <h1>Fully Compliant</h1>
              <h1>Secure Accounts</h1>
              <h1>Built for Scale</h1>
            </Col>
            <Col className='middle-part'>
              <video muted autoPlay loop>
                <source src={rings} type="video/webm" />
              </video>
            </Col>
            <Col className='right-part'>
              <p>Send global payouts to over 130+ countries using 1 API call.</p>
              <p>We provide support for over 60 fiat and cryptocurrencies.</p>
              <p>We take care of licensing and compliance setup so you can focus on your vision.</p>
              <p>Create compliant accounts that perform KYC checks on your customers.</p>
              <p>Stress tested with up to 6000 transactions per second.</p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end options */}
      {/* start imagine */}
      <section className="imagine">
        <Container>
          <Row>
            <Col className='left'>
              <h4>GO WILD WITH WYRE</h4>
              <p>We give you access to the same technology used by the titans of the crypto industry, so you always have future-proof tools and resources at your fingertips. If you can imagine it, you can build it with Wyre.</p>
            </Col>
            <Col className='right'>
              <Parallax translateX={['-100px', '200px']}>
                <h1><span>IMAGINE IT,</span><br/>BUILD IT</h1>
              </Parallax>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end imagine */}
      {/* start wallet */}
      <section className="wallet">
        <Container>
          <h1>NFT MARKETPLACE</h1>
          <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              origin: "left center",
              translate: ["-5%", 0, -200],
              rotate: [0, 100, 0],
            },
            next: {
              origin: "right center",
              translate: ["5%", 0, -200],
              rotate: [0, -100, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper6"
        >
          <SwiperSlide>
            <img src={crypto1} alt="crypto one" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={crypto2} alt="crypto two" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={crypto3} alt="crypto three" />
          </SwiperSlide>
        </Swiper>
        </Container>
      </section>
      {/* end wallet */}
      {/* start build */}
      <section className="build">
        <Container>
          <Row>
            <Col className='left'>
              <Parallax translateX={['-200px', '200px']}>
                <h1>Let's Build Together</h1>
                <p>We’re ready to help you transform your ideas into global successes with simple and secure crypto-fiat experiences.</p>
                <button class="cta">
                  <span>Get Started</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </Parallax>
            </Col>
            <Col className='right'>
              <video muted autoPlay loop>
                <source src={prefooter} type="video/webm" />
              </video>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end build */}
      {/* start footer */}
      <footer>
        <p>WYRE, INC. 2013 – 2022<br/>ALL RIGHTS RESERVED</p>
        <h1>WYRE</h1>
        <Scrollchor to="#header" animate={{ duration: 2000, easing: linear }}>
          <BsArrowUpSquare/>
        </Scrollchor>
      </footer>
      {/* end footer */}
      </article>
    </motion.section>
  )
}

export default Home