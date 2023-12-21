import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../slices/cartslice';
import { useEffect } from 'react';
import { useState } from 'react';



function Cart() {

  const dispatch=useDispatch()


  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);

  const navigate = useNavigate()



  const [total, setTotal] = useState(0)
  //function to finf the sum of given array
  const getTotal=()=>{
   setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2,0))
  }

  useEffect(() => {
    
  getTotal()
   
  }, [cartArray])
  
 const handlecart=()=>{
  alert('Your Order Placed Successfully')
  dispatch(emptyCart())
  navigate('/')
 }

  return (
    <div style={{marginTop:"110px"}}>
       { cartArray?.length>0?
    <div className='row w-100' >
    
     <div  className='col-lg-6 m-5 '>
        <table  className='table shadow border' >
          <thead>
            <tr >
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
         {cartArray?.map((item,index)=>(<tr>
              <td >{index+1}</td>
              <td>{item.title}</td>
              <td><img style={{width:"100px",height:"100px"}} src={item.thumbnail} alt="" /></td>
              <td> {item.price} </td>
              <td> <Button onClick={()=>dispatch(removeFromCart(item.id))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button></td>
            </tr>))   }
          </tbody>
        </table>
      </div>

      <div className='col-lg-4 d-flex justify-content-center align-items-center flex-column '>

        <div className='border shadow p-4'  >
          <h3 className='text-success' >Cart Summary</h3>
          <h4>Total number of products : {cartArray.length}</h4>
          <h4>Total price : ${total}</h4>
          <button onClick={handlecart} className='btn btn-success rounded w-100 mt-3'>CheckOut</button>
        </div>

      </div>
        
    </div>:<div style={{height:"500px",marginTop:"100px",}} className='d-flex justify-content-center align-items-center flex-column' >
      <img style={{height:"300px"}} src="https://www.pngplay.com/wp-content/uploads/1/Shopping-Cart-PNG-Image.png" alt="" />
      <br />
      <h1 className='mt-2'>HURRY <i class="fa-solid fa-cart-shopping"></i> <span  style={{fontSize:"20px"}} >Grab Your List Now..!</span></h1>
       <button className='btn btn-success mt-2'><Link style={{textDecoration:"none"}}  to={'/'}>Back To Home</Link></button>
      </div>
    }
      
    </div>
    
  )
}

export default Cart