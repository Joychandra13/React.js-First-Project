
import Carousel from 'react-bootstrap/Carousel'
import React from 'react'

function Hero() {
  return (
    <>
    <Carousel data-bs-theme="dark" indicators={false}>
        <Carousel.Item>
            <div className='text-center Herodiv'>
                <p className=' Carouselp'>Meet your new car</p>
                <h1 className='Carouselh1'>Honda Civic Type R</h1>
                <div className='mt-5'>
                    <button className='btn btn-outline-secondary Carouselbutton'>More Details</button>
                    <button className='btn btn-primary Carouselbutton2'>Test Drive</button>
                </div>
            </div>
            <div className='Heroimg'>
                <img className='d-block w-100' src="img/Header Image.png" alt=""/>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className='text-center Herodiv'>
                <p className=' Carouselp'>Meet your new car</p>
                <h1 className='Carouselh1'>Hyundai Elantra</h1>
                <div className='mt-5'>
                    <button className='btn btn-outline-secondary Carouselbutton'>More Details</button>
                    <button className='btn btn-primary Carouselbutton2'>Test Drive</button>
                </div>
            </div>
            <div className='Heroimg'>
                <img className='d-block w-100' src="img/1.png" alt=""/>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className='text-center Herodiv'>
                <p className=' Carouselp'>Meet your new car</p>
                <h1 className='Carouselh1'>Cadillac Escala</h1>
                <div className='mt-5'>
                    <button className='btn btn-outline-secondary Carouselbutton'>More Details</button>
                    <button className='btn btn-primary Carouselbutton2'>Test Drive</button>
                </div>
            </div>
            <div className='Heroimg'>
                <img className='d-block w-100' src="img/2.png" alt=""/>
            </div>
        </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Hero