import React, { useContext, useEffect, useState } from 'react';
import Footer from './Footer';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Data from '../Components/Data';
import {NewContext} from '../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Create() {

    const navigate=useNavigate()
    const [data,setData] = useContext(NewContext)
    console.log(data)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const addtocart = async (items) => {
        try {
            const response = await axios.post('http://localhost:5000/create', items);
            console.log(response.data);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
        navigate('/cart')
    };

    return (
        <div>
            <Container>
                <Row>
                    {Data.map((items) => (
                        <Col key={items.productName} className="col-4 create">
                            <Card style={{ width: '19rem' }}>
                                <Card.Img variant="top" src={items.productImg} className='phone1' />
                                <Card.Body className='card-container' style={{ marginTop: "10%" }}>
                                    <Card.Title className='card1-title'>SMART PHONE</Card.Title>
                                    <Card.Text className='card1-text'>
                                        {items.productName}
                                    </Card.Text>
                                    <Card.Text className='card1-text2'>
                                        <span className='omr'>{items.Price}</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <button className='card-button1' onClick={() => addtocart(items)}>
                                <p className="btn-tag">ADD TO CART</p>
                            </button>
                        </Col>
                    ))}
                </Row>
            </Container>

            <div className="footer" style={{ marginTop: "20%" }}>
                <Footer />
            </div>
        </div>
    );
}

export default Create;
