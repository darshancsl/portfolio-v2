import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import pagesData from "../../pages/pagesData";
import "./Header.css";
import Logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    // * Used Navbar for header from react-bootstrap
    <section data-testid='header' id='header' className='shadow'>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={Logo} alt='Logo' />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className='border-white'
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {pagesData.map(({ title, path }) => {
                return (
                  <Nav.Link
                    data-testid='nav-list'
                    key={title}
                    as={Link}
                    to={path}
                    className='mx-2 fw-medium text-capitalize'
                  >
                    {title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
