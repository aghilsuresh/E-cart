import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishList } from '../slices/wishlistSlice';
import { addToCart } from '../slices/cartslice';




function WishList() {

  const wishlistarray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistarray);

  const dispatch=useDispatch()

  const handlewishlist=(item)=>{
    
    dispatch(addToCart(item))
    dispatch( removeFromWishList(item.id))
  }

 

  return (
    <div style={{marginTop:"110px"}}>
      

       <Row className='ms-5 me-3'>

      { wishlistarray?.length>0?wishlistarray?.map((item)=>(<Col className='mb-5 'sm={12} md={6} lg={4} xl={3}>
      
      <Card style={{ width: '18rem',boxShadow:' 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0.19)'}}>
      <Card.Img variant="top" src={item.thumbnail} style={{height:"200px"}} />
      <Card.Body>
        <Card.Title>{item.title.slice(0,20)}</Card.Title>
        <Card.Text>
          <p>{item.description.slice(0,40)}</p>
          <p className='fw-bolder'>Price: ${item.price}</p>
        </Card.Text>
       <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={()=>dispatch(removeFromWishList(item.id))}  variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
          <Button onClick={()=>handlewishlist(item)} variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
       </div>
      </Card.Body>
    </Card>
      
      </Col>))
    :<div style={{height:"500px"}} className='d-flex justify-content-center align-items-center flex-column' >
      <img style={{height:"300px",marginTop:"100px"}} src="https://www.pngplay.com/wp-content/uploads/1/Shopping-Cart-PNG-Image.png" alt="" />
      <br />
      <h1 className='mt-2'> HURRY <i class="fa-solid fa-cart-shopping"></i>   <span style={{fontSize:"20px"}}> Grab Your List Now..!</span></h1>
       <button className='btn btn-success mt-2'><Link style={{textDecoration:"none"}}  to={'/'}>Back To Home</Link></button>
      </div>}
      
       </Row>


    </div>

  
  )
}

export default WishList