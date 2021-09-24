import {Navbar,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from './Dropdown.js';



function Navigation(props){
	return (
		<Navbar bg="gray" expand="lg" fixed="top" >
		  <Container>
		    <Navbar.Brand href="#home">Julius Caezar C. Coros</Navbar.Brand>
		    <Select drop-items={props.navList}/>
		  </Container>
		</Navbar>
		)
}

export default Navigation;