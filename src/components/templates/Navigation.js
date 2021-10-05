import {Navbar,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from './Select.js';
import React from 'react';

 

function Navigation(props){
	
	return (
		
		<Navbar bg="gray" expand="sm" fixed="top" >
		  <Container fluid>
		    <Navbar.Brand href="#home">Julius Caezar Coros</Navbar.Brand>
		    <Select navList={props.navList}/>
		  </Container>
		</Navbar>
		
		)
}

export default Navigation;