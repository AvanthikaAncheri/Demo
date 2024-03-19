import React from 'react'
import '../Styles/footer.css'
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';
import Payment from '../images/payment.png'

function Footer() {
  return (
    <>
    <div>
        <div className="f-container">
          <ul className="list">
            <li className="list-head">IMPORTANT LINKS</li>
            <li className="list-li">Help & FAQ</li>
            <li className="list-li">Rhoncus</li>
            <li className="list-li">Shipping & Delivery</li>
            <li className="list-li">Orders History</li>
            <li className="list-li">Rhoncus</li>
          </ul>
          <ul className="list">
            <li className="list-head">ABOUT US</li>
            <li className="list-li">About Us</li>
            <li className="list-li">Careers</li>
            <li className="list-li">Our Stores</li>
            <li className="list-li">Sales</li>
            <li className="list-li">Rhoncus</li>
          </ul>
          <ul className="list">
            <li className="list-head">MORE INFORMATION</li>
            <li className="list-li">Affiliates</li>
            <li className="list-li">My Accounts</li>
            <li className="list-li">Offerzone</li>
            <li className="list-li">Gift Vouchers</li>
            <li className="list-li">Privacy policy</li>
          </ul>
          <ul className="list">
            <li className="list-head">SOCIAL MEDIA</li>
            <li className="li-icons">
                <div className="media1">
                    <FaFacebookF/>
                </div>
                <div className="media2">
                    <FaTwitter />
                </div>
                <div className="media1">
                     <FaLinkedin />
                </div>
                <div className="media1">
                    <FaYoutube />
                </div>
            </li>
            <li className="list-head" style={{marginTop:"20px"}}>PAYMENT METHODS</li>
            <li className="li-icons">
                <img src={Payment} alt="" />
            </li>
          </ul>
        </div>
       
    </div>
    <div className="f-section">
            <ul className="list-ul">
                <li className="list-item"><span className='mobile'>Mobile :</span><span className="li-text" style={{ whiteSpace: 'pre' }}>  Rhoncus  |   Rhoncus  |   Rhoncus  |   Rhoncus  |   Rhoncus  |   </span><span className="view">View All</span></li>
                <li className="list-item"><span className='mobile'>Electronics :</span><span className="li-text" style={{ whiteSpace: 'pre' }}>  Cables & Adapters  |   Electronic Cigarettes  |   Batteries  |   Chargers  |   Home Electronic  |   </span><span className="view">View All</span></li>
                <li className="list-item"><span className='mobile'>Smart Watch:</span><span className="li-text" style={{ whiteSpace: 'pre' }}>  Rhoncus  |   Rhoncus  |   Rhoncus  |   Rhoncus  |   Rhoncus  |   </span><span className="view">View All</span></li>
                <li className="list-item"><span className='mobile'>Laptop & PC:</span><span className="li-text" style={{ whiteSpace: 'pre' }}>  Rhoncus  |   Rhoncus  |   Rhoncus  |   Rhoncus  |   Rhoncus  |   </span><span className="view">View All</span></li>
                <li className="list-item"><span className='mobile'>Gaming:</span><span className="li-text" style={{ whiteSpace: 'pre' }}>  Rhoncus  |   Rhoncus  |   Rhoncus  |   Rhoncus  |   Rhoncus  |   </span><span className="view">View All</span></li>
                <li className="list-item"><span className='mobile'>Accessories </span><span className="li-text" style={{ whiteSpace: 'pre' }}>  Rhoncus  |   Rhoncus  |   Rhoncus  |   Rhoncus  |   Rhoncus  |   </span><span className="view">View All</span></li>
            </ul>
            <div className="h-line"></div>
            <div className="contact">
            <div className="media2" style={{paddingTop:"5px"}}>
                    <FaPhoneAlt />
                </div>
                <div className="helpline">Helpline</div>
                <div className="number">1800 456 84788</div>
            </div>
        </div>
        <div className="f-footer">
                <div className="copyright">Demo  © 2023. All Rights Reserved</div>
            </div>
    </>
  )
}

export default Footer