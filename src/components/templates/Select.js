import Dropdown from 'react-bootstrap/Dropdown';

function Select(props) {

	
	const navItems = props.navList.map((navItem)=>
			<Dropdown.Item src={"#"+navItem} >{navItem}</Dropdown.Item>);


	

	return(
		<Dropdown align="end">
			<Dropdown.Toggle variant="dark" id="dropdown-basic">
				A Dropdown
			</Dropdown.Toggle>
			<Dropdown.Menu variant="dark">				
					{navItems}
				<Dropdown.Divider />
				<Dropdown.Item >Props are dynamically populated</Dropdown.Item>
			</Dropdown.Menu>

		</Dropdown>
	);
}

export default Select;