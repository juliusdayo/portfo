<<<<<<< Updated upstream:src/components/intro/Caption.js
import '../../css/Caption.css';


function Caption(props){

	
	

	return(
		<div className="Caption-Con">
				<h3>{props.greet}</h3>
			<p className="Caption-Text">{props.desc}</p>
			
		</div>

		)
}

=======
import '../../css/Caption.css';


function Caption(props){

	
	

	return(
		<div className="Caption-Con Caption-Text">
				<h3>{props.title}</h3>
			<p className="Caption-Text">{props.desc}</p>
			
		</div>

		)
}

>>>>>>> Stashed changes:src/components/global_components/Caption.js
export default Caption;