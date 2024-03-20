import React, { useState } from 'react'
import '../Styles/product.css'
import headset1 from '../images/hs1.png'
import headset2 from '../images/hs2.png'
import headset3 from '../images/hs3.png'
import headset4 from '../images/hs4.png'
import { TiStarFullOutline } from "react-icons/ti";
import { FaCheck } from 'react-icons/fa6'
import { MdFavoriteBorder } from "react-icons/md";
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import Phone from '../images/phone.png'
import { IoMdAdd } from "react-icons/io";
import Footer from './Footer'
import { IoClose } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

function Product() {
    const [show, setShow] = useState(false);

    const navigate=useNavigate()

    const handleButtonClickme = () => {
      setShow(true);
    };
  
    const handleCloseModalnow = () => {
      setShow(false);
    };

    const handleClick = () => {
        navigate('/create')
     };

     const [num, setfirst] = useState(1)

  const decrement =()=> {
     
    if(num<=1){
       alert("Not possible")
    }
    else{
        setfirst(num-1)
    }
    }

  return (
    <div className='p-main'>
        <div className="p-section">
            <div className="p-content1">
                <div className="box1">
                   <img src={headset1} alt="" className='hs1'/>
                </div>
                 <div className="box2">
                     <div className="box3">
                       <img src={headset4} alt="" className='hs2'/>
                    </div>
                    <div className="box3">
                       <img src={headset3} alt="" className='hs2'/>
                    </div>
                    <div className="box4">
                       <img src={headset2} alt="" className='hs2'/>
                    </div>
                 </div>
            </div>
            <div className="p-content2">
                <div className="airpod">AirPods Max</div>
                <div className="star">
                <TiStarFullOutline className='star-id'/>
                <TiStarFullOutline className='star-id'/>
                <TiStarFullOutline className='star-id'/>
                <TiStarFullOutline className='star-id'/>
                <TiStarFullOutline className='star-id'/>
                <div className="star-text">( There are no reviews yet )</div>
                </div>
                <div className="rating">
                     <span className='omr'>OMR</span><span className='price'>4,699.00</span><span className='price1'>4,699.00</span>
                </div>
                <div className="rating-para">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. </div>
                <div className="rate-clr">Colour:  Silver</div>
                <div className="r-clrs">
                    <div className="clr-box">
                        <div className="clr"></div>
                    </div>
                    <div className="clr-box">
                        <div className="clr1"></div>
                    </div>
                    <div className="clr-box">
                        <div className="clr2"><FaCheck style={{color:"white"}} className='clrcheck'/></div>
                    </div>
                    <div className="clr-box">
                        <div className="clr3"></div>
                    </div>
                    <div className="clr-box">
                        <div className="clr4"></div>
                    </div>
                </div>
                <div className="rate-clr">Internal Memory</div>
                <div className="r-clrs">
                    <div className="no-box">256GB</div>
                    <div className="no-box1">512GB</div>
                    <div className="no-box">1TB</div>
                    <div className="no-box">128GB</div>
                </div>
                <div className="line"></div>
                <div className="wrap">
                    <div className="wrap-box">
                        <button className="sub" onClick={decrement}> - </button>
                        <div className="one"> {num} </div>
                        <button className="add" onClick={()=>setfirst(num+1)}> + </button>
                    </div>
                    <div className="add-box" onClick={handleButtonClickme}>
                        <div className="add-cart">ADD TO CART</div>
                    </div>
                </div>
                <div className="line2"></div>
                <div className="r-fav"><MdFavoriteBorder className='fav-btn'/>ADD TO WISHLIST</div>
            </div>
        </div>
        <div className="p-section2">
            <div className="overview">
                <div className="ov-content">
                    <div className="ov-text">Overview</div>
                </div>
                <div className="sp-content">
                    <div className="sp-text">Specifications</div>
                </div>
            </div>
            <div className="p-list">
                <ul className="list-ul-p">
                    <li className="list-li-p">Bluetooth: V5.0</li>
                    <li className="list-li-p">Screen Size: 1.39 inches</li>
                    <li className="list-li-p">Screen Resolution and Brightness: 360*360, 500 Nits Daylight-Bright Display, 2.5D Curved Glass</li>
                    <li className="list-li-p">Battery Capacity: 400 mAh</li>
                    <li className="list-li-p">Sports Modes: 100+</li>
                    <li className="list-li-p">Health Monitoring: SpO2, 24*7 Heart Rate Monitoring, Blood Pressure, High Heart Rate Alert</li>
                    <li className="list-li-p">Health Tracking: Menstrual Cycle, Sleep</li>
                    <li className="list-li-p">Smart Features: Sedentary Alert, Weather, Alarm, Timer, Flashlight, Find Phone</li>
                    <li className="list-li-p">Smart Controls: Remote Camera and Music Player</li>
                    <li className="list-li-p">Bluetooth Calling with inbuilt mic, speaker and dialer</li>
                    <li className="list-li-p">All Messages Notifications</li>
                    <li className="list-li-p">Custom & 100+ Watch Faces</li>
                    <li className="list-li-p">Charging Time: 2 Hrs</li>
                    <li className="list-li-p">Battery Life: 10 Days</li>
                    <li className="list-li-p">Water Resistance Level: IP68</li>
                    <li className="list-li-p">Compatible: Android & iOS</li>
                </ul>
            </div>
            <div className="overview" style={{marginTop:"5%"}}>
                <div className="ov-content">
                  <div className="sp-text">Related Products</div>
                </div>
            </div>
            <Container className='product-container'>
                    <Row className='product-row'>
                        <Col md={2}>
                        <Card style={{ width: '15rem' }}>
                          <button className='card-btn'>
                              <p className="btn-tag1">HOT</p>
                          </button>
                          <Card.Img variant="top" src={Phone} className='phone1'/>
                          <button className='card-btn2' onClick={handleClick}>
                              <p className="btn-tag2"><IoMdAdd/></p>
                          </button>
                          <Card.Body className='card-container'>
                       <Card.Title className='card1-title'>SMART PHONE</Card.Title>
                       <Card.Text className='card1-text'>
                       iPhone 14 Pro max 256GB - Deep Purple..
                      </Card.Text>
                      <Card.Text className='card1-text2'>
                       <span className='omr'>OMR</span><span className='price'>4,699.00</span><span className='price2'>4,699.00</span>
                      </Card.Text>
                  </Card.Body>
                    </Card>
                        </Col>
                        <Col md={2}>
                        <Card style={{ width: '15rem' }}>
                          <button className='card-btn'>
                              <p className="btn-tag1">HOT</p>
                          </button>
                          <Card.Img variant="top" src={Phone} className='phone1'/>
                          <button className='card-btn2' onClick={handleClick}>
                              <p className="btn-tag2"><IoMdAdd/></p>
                          </button>
                          <Card.Body className='card-container'>
                       <Card.Title className='card1-title'>SMART PHONE</Card.Title>
                       <Card.Text className='card1-text'>
                       iPhone 14 Pro max 256GB - Deep Purple..
                      </Card.Text>
                      <Card.Text className='card1-text2'>
                       <span className='omr'>OMR</span><span className='price'>4,699.00</span><span className='price2'>4,699.00</span>
                      </Card.Text>
                  </Card.Body>
                  </Card>
                        </Col>
                        <Col md={2}>
                        <Card style={{ width: '15rem' }}>
                          <button className='card-btn'>
                              <p className="btn-tag1">HOT</p>
                          </button>
                          <Card.Img variant="top" src={Phone} className='phone1'/>
                          <button className='card-btn2' onClick={handleClick}>
                              <p className="btn-tag2"><IoMdAdd/></p>
                          </button>
                          <Card.Body className='card-container'>
                       <Card.Title className='card1-title'>SMART PHONE</Card.Title>
                       <Card.Text className='card1-text'>
                       iPhone 14 Pro max 256GB - Deep Purple..
                      </Card.Text>
                      <Card.Text className='card1-text2'>
                       <span className='omr'>OMR</span><span className='price'>4,699.00</span><span className='price2'>4,699.00</span>
                      </Card.Text>
                  </Card.Body>
                  </Card>
                        </Col>
                        <Col md={2}>
                        <Card style={{ width: '15rem' }}>
                          <button className='card-btn'>
                              <p className="btn-tag1">HOT</p>
                          </button>
                          <Card.Img variant="top" src={Phone} className='phone1'/>
                          <button className='card-btn2' onClick={handleClick}>
                              <p className="btn-tag2"><IoMdAdd/></p>
                          </button>
                          <Card.Body className='card-container'>
                       <Card.Title className='card1-title'>SMART PHONE</Card.Title>
                       <Card.Text className='card1-text'>
                       iPhone 14 Pro max 256GB - Deep Purple..
                      </Card.Text>
                      <Card.Text className='card1-text2'>
                       <span className='omr'>OMR</span><span className='price'>4,699.00</span><span className='price2'>4,699.00</span>
                      </Card.Text>
                  </Card.Body>
                  </Card>
                        </Col>
                        <Col md={2}>
                        <Card style={{ width: '15rem' }}>
                          <button className='card-btn'>
                              <p className="btn-tag1">HOT</p>
                          </button>
                          <Card.Img variant="top" src={Phone} className='phone1'/>
                          <button className='card-btn2' onClick={handleClick}>
                              <p className="btn-tag2"><IoMdAdd/></p>
                          </button>
                          <Card.Body className='card-container'>
                       <Card.Title className='card1-title1'>SMART PHONE</Card.Title>
                       <Card.Text className='card1-text'>
                       iPhone 14 Pro max 256GB - Deep Purple..
                      </Card.Text>
                      <Card.Text className='card1-text2'>
                       <span className='omr'>OMR</span><span className='price'>4,699.00</span><span className='price2'>4,699.00</span>
                      </Card.Text>
                  </Card.Body>
                  </Card>
                        </Col>
                    </Row>
                </Container>
        </div>
        <div className="footer">
            <Footer/>
        </div>
        <Modal show={show}>
        <Modal.Header>
          <Modal.Title className='modal-title'>Shopping Cart</Modal.Title>
          <Button className="close-btn" variant='dark' onClick={handleCloseModalnow}><IoClose className='io-close'/></Button>
        </Modal.Header>
        <Modal.Body className='m-body'>
          <div className="w-iphone">
            <div className="w-text">
                <div className="w-text1">iPhone 14 Pro max 256GB - Deep Purple</div>
                <div className="w-text2">1  x  OMR 107.00</div>
            </div>
            <div className="w-image">
              <div className="w-close">
              <IoClose/>
              </div>
              <div className="w-img">
                <img src={headset3} alt="" width={'53px'} height={'55px'}/>
              </div>
            </div>
          </div>
          <div className="w-line"></div>
          <div className="w-iphone">
            <div className="w-text">
                <div className="w-text1">iPhone 14 Pro max 256GB - Deep Purple</div>
                <div className="w-text2">1  x  OMR 107.00</div>
            </div>
            <div className="w-image">
              <div className="w-close">
              <IoClose/>
              </div>
              <div className="w-img">
                <img src={headset3} alt="" width={'53px'} height={'55px'}/>
              </div>
            </div>
          </div>
          <div className="subtotal">
            <div className="subtotal-txt">Subtotal</div>
            <div className="sub-omr">OMR  107.00</div>
          </div>
          <Link to='/cart'>
          <button className="w-view-list">
                <div className="w-viewlist-txt">VIEW CART</div>
          </button>
          </Link>
          <button className="w-view-list1">
                <div className="w-viewlist-txt1">CHECKOUT</div>
          </button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Product

