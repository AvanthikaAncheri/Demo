import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Phone from '../images/phone.png'
import { IoMdAdd } from "react-icons/io";
import '../Styles/Home.css'
import { useNavigate } from 'react-router-dom';

function Products() {

    const navigate=useNavigate()
    
    const handleClick = () => {
         navigate('/create')
      };


  return (
    <div style={{marginTop:"20px",marginBottom:"20px"}}>
        <Container>
          <Row>
             <Col className="col-4 h-200 column">
                 <Card style={{ width: '28rem' }} className='h-100'>
                    <Card.Img variant="top" src={Phone} className='phone'/>
                    <Card.Body className='my-card-body'>
                       <Card.Title className='card-title'>AUDIO AMPLIFIER, HDMI PROJECTORS</Card.Title>
                       <Card.Text className='card-text'>
                       iPhone 14 Pro max 256GB - Deep Purple..
                      </Card.Text>
                      <Card.Text className='card-text2'>
                       <span className='omr'>OMR</span><span className='price'>4,699.00</span><span className='price1'>4,699.00</span>
                      </Card.Text>
                      <button className='card-button1' onClick={handleClick}>
                        <p className="btn-tag">ADD TO CART</p>
                      </button>
                  </Card.Body>
               </Card>
             </Col>
             <Col>
                 <Row>
                     <Col className="col-4">
                      <Card style={{ width: '19rem' }}>
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

                     <Col className="col-4">
                     <Card style={{ width: '19rem' }}>
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

                     <Col className="col-4">
                     <Card style={{ width: '19rem' }}>
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
                 </Row>

                 <Row>
                     <Col className="col-4">
                      <Card style={{ width: '19rem' }}>
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

                     <Col className="col-4">
                     <Card style={{ width: '19rem' }}>
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

                     <Col className="col-4">
                     <Card style={{ width: '19rem' }}>
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
                 </Row>
              </Col>
       </Row>
      
    </Container>
    </div>
  )
}

export default Products

// https://youtu.be/B0E2esA5nQo?si=Uqyyrrp3ez8gIr9P