import React, { useState } from 'react'
import Footer from '../Models/Footer'
import '../Styles/styles.css'
import { Button, Modal, Table } from 'react-bootstrap'
import { IoClose } from 'react-icons/io5'
import headset3 from '../images/hs3.png'
import { Link } from 'react-router-dom'

function Wishlist() {

    const [show, setShow] = useState(false);

    const handleButtonClickme = () => {
      setShow(true);
    };
  
    const handleCloseModalnow = () => {
      setShow(false);
    };
    

  return (
    <div>
        <div className="wishlist-main">
            <div className="wishlist-text">Wishlist</div>
        </div>
        
        <div className="table1">
        <Table className="table-borderless">
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>STOCK STATUS</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='table-td'>
          <div className="w-image">
              <div className="w-close">
              <IoClose/>
              </div>
              <div className="w-img">
                <img src={headset3} alt="" width={'53px'} height={'55px'}/>
              </div>
            </div>
            <div className="w-airpods1">Airpods Max</div>
          </td>
          <td><div className="w-airpods2">OMR 107.00</div></td>
          <td><div className="w-airpods2">In stock</div></td>
          <td className='td-btns'>
          <button className="w-view-list2">
                <div className="w-viewlist-txt2">QUICK VIEW</div>
          </button>
          <button className="w-view-list3" onClick={handleButtonClickme}>
                <div className="w-viewlist-txt3">ADD TO CART</div>
          </button>
          </td>
        </tr>

      </tbody>
    </Table>
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

export default Wishlist