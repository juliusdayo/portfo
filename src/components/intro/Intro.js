
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
				<Col  sm={6} bg="dark" className="Intro-Caption" animation="glow">
					<Caption desc={props.desc} greet={props.greet}/>
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