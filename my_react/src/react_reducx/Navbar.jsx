import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

 
  

function NavScrollExample() {
  const productlenght=useSelector(state=>state.cart);
  return (
    <div className='col-sm-12'>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Redux ToolKit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
   
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to='./' as={Link}>Products</Nav.Link>
           
          </Nav>
   
    <Navbar.Toggle/>
   
    <Navbar.Collapse className='justify-content-end'>
    <Navbar.Text>  <Nav.Link to='./cart' as={Link}>May Cart {productlenght.length}</Nav.Link></Navbar.Text> 
  
           
       
   </Navbar.Collapse>
     
      </Container>
    </Navbar></div>
  );
}

export default NavScrollExample;
    


