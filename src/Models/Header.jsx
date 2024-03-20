import React, { useState } from 'react'
import { Button, Col, Container, Form, Modal, Navbar, Row } from 'react-bootstrap'
import logo from '../images/logo.png'
import '../Styles/Header.css'
import { IoSearch } from "react-icons/io5";
import { FaBasketShopping, FaHeart, FaUserLarge } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import headset3 from '../images/hs3.png'

function Header() {

  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  

  return (
    <div>
        <Navbar expand="lg" className="" style={{marginTop:"1%"}}>
      <Container>
        <Link to='/'>
        <img src={logo} alt="" className='logo'/>
        </Link>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="What are you looking for?"
              className=" mr-sm-2 search"
            />
          </Col>
          <Col xs="auto">
            <button className='search-btn'><Link to='/product' className="search-icon"><IoSearch /></Link></button>
          </Col>
          <Col xs="auto">
            <div className="horizontal-line"></div>
          </Col>
          <Col xs="auto">
            <div className="icon-box"><Link to='/login' style={{color:"#000000"}}> <FaUserLarge className='icon-icon'/></Link></div>
          </Col>
          <Col xs="auto">
            <div className="icon-box" onClick={handleButtonClick}><FaHeart className='icon-icon'/></div>
          </Col>
          <Col xs="auto">
            <Link to='/cart'>
            <div className="icon-box" style={{color:"#000000"}}><FaBasketShopping className='icon-icon'/></div>
            </Link>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>

    <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title className='modal-title'>Wishlist</Modal.Title>
          <Button className="close-btn" variant='dark' onClick={handleCloseModal}><IoClose className='io-close'/></Button>
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
          <Link to='/wishlist'>
          <button className="w-view-list">
                <div className="w-viewlist-txt">VIEW WISHLIST</div>
          </button>
          </Link>
          <button className="w-view-list1">
                <div className="w-viewlist-txt1">ADD TO CART</div>
          </button>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Header