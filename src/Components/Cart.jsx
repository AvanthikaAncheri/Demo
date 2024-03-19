import React, { useEffect, useState } from 'react'
import '../Styles/styles.css'
import { IoClose } from 'react-icons/io5'
import { Col, Form, Table } from 'react-bootstrap'
import headset3 from '../images/hs3.png'
import { Link } from 'react-router-dom'
import Footer from '../Models/Footer'
import axios from 'axios'
import Data from './Data'


function Cart() {

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
    <div>
         <div className="wishlist-main">
            <div className="wishlist-text">Cart</div>
        </div>
     <div className='cart-sections'>
        <div className="cart-section1">
        <div className="table2">
        <Table className="table-borderless">
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        {
          Data.map((display)=> (
            <tr>
            <td className='table-td1'>
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
            <td>
            <div className="wrap-box">
                          <button className="sub" onClick={decrement}> - </button>
                          <div className="one">{num}</div>
                          <button className="add" onClick={()=>setfirst(num+1)}> + </button>
                      </div>
            </td>
            <td>
            <div className="w-airpods2">0MR {num * 107.00}.00 </div>
            </td>
          </tr>
          ))
        }

      </tbody>
    </Table>
    <div className="cart-btns">
        <Col xs="auto">
            <Form.Control
              type="number"
              placeholder="coupon code"
              className=" mr-sm-2 coupon"
            />
          </Col>
          <Col xs="auto">
            <button className='cart-btn11'><p className="cart-text11">APPLY COUPON</p></button>
          </Col>
          <button className="cart-btn22">
                <div className="w-viewlist-txt2">UPDATE</div>
          </button>
       </div>
        </div>
        </div>

        <div className="cart-section2">
            <div className="cart-totals">
                  <div className="ct-text">Cart Totals</div>
                  <div className="cart-subtotal">
                    <div className="cart-subtl-text">Subtotal</div>
                    <div className="cart-omr-text">OMR 107.00</div>
                  </div>
                  <div className="cart-subtotal1">
                    <div className="cart-subtl-text">Total</div>
                    <div className="cart-omr-text1">OMR 107.00</div>
                  </div>
                  <Link to='/checkout'>
                     <div className="cart-subtl-btn">
                        <div className="proceed">PROCEED TO CHECKOUT</div>
                     </div>
                  </Link>
            </div>
        </div>

     </div>
     <div className="footer">
        <Footer/>
     </div>
    </div>
  )
}

export default Cart