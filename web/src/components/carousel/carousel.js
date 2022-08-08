import React from 'react'
import './carousel.css'
import Carousel from 'react-bootstrap/Carousel';

const carousel=()=>{
    return(
        <div className='p-5'>
            <Carousel>
      <Carousel.Item>
        <img
        height={570}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Headphones</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={570}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Shoes</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={570}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Camera</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}
export default carousel