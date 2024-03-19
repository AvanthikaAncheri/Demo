import React from 'react'
import '../Styles/login.css'
import { Form } from 'react-bootstrap'
import google from '../images/google.png'
import { FaApple } from 'react-icons/fa6'
import Footer from './Footer'


function Login() {
  return (
    <div>
        <div className="loginpg">
             <div className="l-content">
                <div className="l-login">Login/Register to your account</div>
                <div className="l-login-text">Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas placerat ut sagittionec.</div>
                <div className="form">
                  <Form>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                       <Form.Control type="number" placeholder="Enter Mobile Number" className='form-text'/>
                     </Form.Group>
                  </Form>
                  <button className="or-text">Or</button>
                  <button className='google-btn'>
                    <img src={google} alt="" width={'20px'} height={'20px'}/>
                    <div className="g-text">Login with google</div>
                  </button>
                  <button className='google-btn'>
                  <FaApple />
                    <div className="g-text">Sign in with Apple</div>
                  </button>
                  <button className='card-button'>
                        <p className="btn-tag">GET OTP</p>
                      </button>
                </div>
             </div>
             <div className="footer" style={{paddingTop:"50px",border:"none !important"}}>
        <Footer/>
    </div>
        </div>
    </div>
  )
}

export default Login