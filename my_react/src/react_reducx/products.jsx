 import {useEffect} from 'react';
 import {useDispatch,useSelector } from 'react-redux';
 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from './cartSlice';
import { getProducts } from './productSlice';



 
const Fetch_product=()=>{
    
    const dispatch = useDispatch();
    const {data: products}=useSelector(state => state.products);
 
//  const [products,getProducts] =useState([]);
   useEffect(()=> {

dispatch(getProducts());
//    fetch('https://fakestoreapi.com/products')
//         .then(res=>res.json())
//         .then(json=>getProducts(json))


   },[]);


   const addCart=(product)=>{
    dispatch(add(product));

   }



const cards= products.map(product => (


    <div key={product.id} className='col-md-3' style={{marginBottom:'10px'}}>
    <Card  className='h-100'>
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
             <Button variant="primary"   onClick={() =>addCart(product)}>Add To Cart
             </Button>
             </Card.Footer>
        </Card>
    </div>
));

    return(
 <>   
    <div className='row'>
        {cards}

    </div>


 </>
 

        


    );
}
 export default Fetch_product;