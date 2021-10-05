import Dropdown from 'react-bootstrap/Dropdown';

function Select(props) {

	
	const navItems = props.navList.map((navItem,objkey)=>
			<Dropdown.Item src={"#"+navItem} key={objkey} >{navItem}</Dropdown.Item>);


	

	return(
		<Dropdown align={{ sm: 'end' }}>
			<Dropdown.Toggle variant="dark" id="dropdown-basic">
				A Dropdown
			</Dropdown.Toggle>
			<Dropdown.Menu variant="dark">				
					{navItems}
			
			</Dropdown.Menu>

		</Dropdown>
	);
}

export default Select;