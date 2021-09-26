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

export default Intro;