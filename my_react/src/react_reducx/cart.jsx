import { useSelector,useDispatch } from "react-redux";
import Fetch_product from "./products";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add,remove } from './cartSlice';


const cart=()=>{
    
    const dispatch=useDispatch();
const removeCart=(id)=>{

    dispatch(remove(id))
}
    const productCart=useSelector(state=>state.cart);
  
    
const cards= productCart.map(product => (


    <div key={product.id} className='col-md-12' style={{marginBottom:'10px'}}>
    <Card  className=''>
        <div className='text-center'>
        <Card.Img variant="top" src={product.image} style={{width:'100px',height:"130px"}} />
        </div>
       
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
          {product.price} 
            </Card.Text>
        
        </Card.Body>
        <Card.Footer style={{backgroundColor:'white'}}>   
             <Button variant="primary"   onClick={() =>removeCart(product.id)}>Remove Item
             </Button>
             </Card.Footer>
        </Card>
    </div>
));
    return(
         <>  

             <h2>Add to cart</h2>
             
            <div >
            {cards}

            </div>



        
        </>
    );
}
export default cart;