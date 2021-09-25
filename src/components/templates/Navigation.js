import {Navbar,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from './Select.js';



function Navigation(props){

	return (
		<Navbar bg="gray" expand="lg" fixed="top" >
		  <Container>
		    <Navbar.Brand href="#home">Julius Caezar C. Coros</Navbar.Brand>
		    <Select navList={props.navList}/>
		  </Container>
		</Navbar>
		)
}

export default Navigation;