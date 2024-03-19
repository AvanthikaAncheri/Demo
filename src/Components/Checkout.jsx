import React from 'react'
import '../Styles/styles.css'
import { FaCheck } from 'react-icons/fa6'
import Footer from '../Models/Footer'

function Checkout() {
  return (
    <div>
        <div className="checkout">
            <div className="checkbox">
                <div className="check-clr">
                <FaCheck style={{color:"white",marginTop:"25%",width:"57px",height:"57px"}}/>
                </div>
            </div>
            <div className="purchase">Purchased Succesfully</div>
            <div className="checkout-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo molestiae. Iusto!</div>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  )
}

export default Checkout