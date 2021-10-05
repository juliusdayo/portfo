<<<<<<< Updated upstream
import Alert from 'react-bootstrap/Alert';
import {Container,Row,Col} from 'react-bootstrap';
import Avatar from './Avatar.js';
import Caption from './Caption.js';
import '../../css/Intro.css';
import Showcase from './Showcase.js';



function Intro(props){

	

	const element = (
		<Container fluid >
			<Row>
				<Col sm={3} bg="dark">
					<Avatar />	
				</Col>
				<Col  sm={6}  className="Intro-Caption" >
					<div className="IntroBack" >
						<Caption desc={props.desc} greet={props.greet}/>
					</div>
				</Col>
				<Col>
					<Showcase/>
				</Col>
			</Row>
		</Container>)

	return(
	<div className="Intro-Con">	
		{element}
	</div>
	)	
}

=======

import {Container,Row,Col} from 'react-bootstrap';
import Avatar from '../global_components/Avatar.js';
import Caption from '../global_components/Caption.js';
import '../../css/Intro.css';
import Showcase from './Showcase.js';

import image from '../../img/pho.jpg';


function Intro(props){

	

	const element = (
		<Container fluid >
			<Row className="justify-content-md-center">
				<Col xs={12} md={5} lg={3} bg="dark">
					<Avatar image={image}/>	
				</Col>
				<Col xs={12} md={4}  className="Intro-Caption" >					
						<Caption desc={props.desc} title={props.title}/>	
				</Col>
				<Col lg={3} >
					<Showcase/>
				</Col>
			</Row>
		</Container>)

	return(
	<div className="Intro-Con">	
		{element}
	</div>
	)	
}

>>>>>>> Stashed changes
export default Intro;