import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';



function Navigationbar({filterProfiles}) {
  const [inputValue, setInputValue] = useState("")
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#"><h3 style={{color:"green"}}>GREENDZINE</h3></Navbar.Brand>
        <Navbar id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
               type="search"
               placeholder="Search"
               className="me-2"
               aria-label="Search"
               value={inputValue}
               onChange={(event) => setInputValue(event.target.value)}
            />
            <Button variant="outline-success" onClick={() => filterProfiles(inputValue)}>Search</Button>
          </Form>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
