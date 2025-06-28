import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="hero container">
        <div className="hero_content">
    <h1>YOUR FEET DESERVE THE BEST</h1>
    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
    
    <div className="hero_button">
        <button>Shop Now</button>
        <button className='category'>Category</button>
    </div>
      <div className="shopping_card">
        <p>Also Available On</p>
        <div className="shopping_logo">
        <img src="/public/images/amazon.png" alt="" />
        <img src="/public/images/flipkart.png" alt="" />
        </div>
      </div>
        </div>
        <div className="hero_image"> <img src="/public/images/shoe_image.png" alt="" /></div>
    </div>
    
    </>
  )
}

export default Hero ; 