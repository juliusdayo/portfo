import '../../css/Avatar.css';


function Avatar(props){


	return(
		<div className="Avatar-Con" >
			<img className="Avatar-Img" src={props.image} alt="AvatarPhoto"  />
		</div>
		)
}


export default Avatar;