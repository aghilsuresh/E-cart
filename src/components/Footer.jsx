import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:"100%" ,height:"auto" }} className='d-flex align-items-center justify-content-center flex-column bg-dark mt-5'>
       
       <div className="footer d-flex align-item-center justify-content-evenly w-100 mt-3" >

       <div className="website" style={{width:"400px"}}>
            <h4 style={{overflowY:"hidden"}} ><i class="fa-solid fa-cart-shopping"></i>{' '}
              MY-CART</h4>
            <h6 style={{overflowY:"hidden"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure beatae blanditiis laudantium. Est odio pariatur eaque repudiandae aut repellat nemo nihil!</h6>
       </div>
       <div className="link d-flex  flex-column">
        <h4 style={{overflowY:"hidden"}}>Links</h4>
        <Link to={'/'} style={{textDecoration:"none",color:"white"}} >Home page</Link>
        <Link to={'/cart'} style={{textDecoration:"none",color:"white"}} >Cart page</Link>
        <Link to={'/wishlist'} style={{textDecoration:"none",color:"white"}}>WishList</Link>
       </div>

       <div className="guides d-flex  flex-column">
        <h4 style={{overflowY:"hidden"}}>Guides</h4>

        <Link to={'/'} style={{textDecoration:"none",color:"white"}} >React</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:"none",color:"white"}} >React bootstrap</Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:"none",color:"white"}}>Bootswatch</Link>
        
       </div>
       <div className="contact d-flex  flex-column">
        <h4 style={{overflowY:"hidden"}}>Contact us</h4>
        <div className='d-flex mb-3'>
          <input type="text" className='form-control' placeholder=' enter your email id' />
          <button  className='btn btn-warning text-white ms-2 '> Subscribe</button>
        </div>
        <div className='d-flex justify-content-evenly'>
      <Link to={''}  style={{textDecoration:"none",color:"white"}} >  <i class="fa-brands fa-instagram fa-2x  "></i></Link>
       <Link to={''}  style={{textDecoration:"none",color:"white"}} > <i class="fa-brands fa-whatsapp  fa-2x  "></i></Link>
       <Link to={''}  style={{textDecoration:"none",color:"white"}} > <i class="fa-brands fa-linkedin  fa-2x "></i></Link>
        <Link to={''}  style={{textDecoration:"none",color:"white"}} ><i class="fa-brands fa-square-twitter  fa-2x  "></i></Link>
        </div>
       </div>  
        </div>
       <p className='mt-3 '>Copyright 2023 media player.built with React </p>

    </div>
  )
}

export default Footer