import '../../css/Caption.css';


function Caption(props){

	
	

	return(
		<div className="Caption-Con">
				<h3>{props.greet}</h3>
			<p className="Caption-Text">{props.desc}</p>
			
		</div>

		)
}

export default Caption;