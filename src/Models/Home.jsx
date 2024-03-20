import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import Banner from '../images/banner.png'
import Image1 from '../images/home-img1.png'
import Image2 from '../images/home-img2.png'
import '../Styles/Home.css'
import Products from '../Components/Products'
import Brand1 from '../images/apple.png'
import Brand2 from '../images/realme.png'
import Brand3 from '../images/sony.png'
import Brand4 from '../images/mi.png'
import Brand5 from '../images/samsung.png'
import Brand6 from '../images/lg.png'
import Brand7 from '../images/dell.png'
import Footer from './Footer'

function Home() {
  return (
    <div >
       <Carousel style={{marginTop:"1%"}}>
  <Carousel.Item>
    <img
      className="d-block w-100 carousal-items"
      src={Banner}
      alt="First slide"
      style={{ objectFit: "cover" }}
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousal-items"
      src={Banner}
      alt="First slide"
      style={{ objectFit: "cover"}}
    />
   
  </Carousel.Item>
</Carousel>
    <Container>
      <Row>
        <Col className='d-flex gap-4 mt-5'>
           <div><img src={Image1} alt="" className='h-image' fluid/></div>
           <div className='h-image-box'><img src={Image2} alt="" className='h-image1' fluid/></div>
        </Col>
      </Row>
    </Container>

    <div className="section">
        <div className="products">
            <h1 className='products-name'>Products</h1>
            <p className='view-product'>View All Products</p>
        </div>
        <Products/>
    </div>

    <div className="section" style={{marginTop:"100px",paddingLeft:"6%"}}>
     <div className="brands-main">
            <h1 className='products-name'>Top Brands</h1>
        </div>
        <div className="brands">
          <div className="brand1">
                <img src={Brand1} alt="" className='apple'/>
            </div>
            <div className="brand2">
                <img src={Brand2} alt="" className='realme'/>
            </div>
            <div className="brand3">
                <img src={Brand3} alt="" className='sony'/>
            </div>
            <div className="brand4">
                <img src={Brand4} alt="" className='mi'/>
            </div>
            <div className="brand5">
                <img src={Brand5} alt="" className='samsung'/>
            </div>
            <div className="brand6">
                <img src={Brand6} alt="" className='lg'/>
            </div>
            <div className="brand7">
                <img src={Brand7} alt="" className='dell'/>
            </div>
        </div>
        
    </div>

    <div className="footer">
        <Footer/>
    </div>
      
    </div>

  )
}

export default Home