
import {Container} from 'react-bootstrap';

import Caption from '../global_components/Caption.js';

function About (props){
   

    
        return(
        <Container fluid md={3}>
            <Caption desc={props.desc} title="About"/>
        </Container>
        )
    
}

export default About;