import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';


function Message({ name, ...props }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
  
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Message</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I've made this in an hour or two... so it's unfinished:)
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      
        <Message  placement="bottom" name="bottom"  />
     
    </>
  );
}


export default Example;