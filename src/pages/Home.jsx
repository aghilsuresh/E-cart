import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../slices/wishlistSlice';
import { addToCart } from '../slices/cartslice';

function Home() {

  //calling the usefetch hook
  const data=useFetch('https://dummyjson.com/products')
  console.log(data); 


 const dispatch = useDispatch()


  return (                                                                       
    <Row className='mb-5 ms-3 ' style={{marginTop:"190px"}}>
     
     { data?.length>0?
          
        data?.map((item)=>(<Col className='mb-5 'sm={12} md={6} lg={4} xl={3}>
              
        <Card style={{ width: '18rem',boxShadow:' 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0.19)',backgroundColor:"white" }}>
        <Card.Img variant="top" src={item.thumbnail} style={{height:"200px"}} />
        <Card.Body style={{color:"black"}}>
          <Card.Title>{item.title.slice(0,20)}</Card.Title>
          <Card.Text>
            <p>{item.description.slice(0,40)}</p>
            <p className='fw-bolder'>Price: ${item.price}</p>
          </Card.Text>
         <div className='d-flex align-items-center justify-content-between'>
            <Button onClick={()=>dispatch(addToWishlist(item))} variant="outline-danger"><i class="fa-solid fa-heart"></i></Button>
            <Button onClick={()=>dispatch(addToCart(item))} variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
         </div>
        </Card.Body>
      </Card>
        
        </Col>))
      : <p>nothing to display</p>

     }
    </Row>
  )
}

export default Home