import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoutIcon from "../../assets/logout.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
function NavbarMenu() {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();
  return (
    <Navbar expand="lg" style={{ background: "#7bc3b0" }}>
      <Container fluid>
        <Navbar.Brand href="#">NPC Learn</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link to="/dashboard" as={Link} style={{ color: "white" }}>
              Dashboard
            </Nav.Link>
            <Nav.Link to="/about" as={Link} style={{ color: "white" }}>
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="font-weight-bolder text-white"
              disabled
              style={{ color: "black" }}
            >
              Welcome {username}
            </Nav.Link>
            <Button
              variant="secondary"
              className="font-weight-bolder text-white"
              onClick={logout}
            >
              <img
                src={logoutIcon}
                alt="logoutIcon"
                width="32"
                height="32"
                className="mr-2"
              />
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div class="vertical-nav bg-white" id="sidebar">
    //   <div class="py-4 px-3 mb-4 bg-light">
    //     <div class="media d-flex align-items-center">
    //       <div class="media-body">
    //         <h4 class="m-0">NPC WEB</h4>
    //         <p class="font-weight-light text-muted mb-0">Web Learn</p>
    //       </div>
    //     </div>
    //   </div>

    //   <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
    //     WELCOME {username}{" "}
    //     <Button
    //       variant="secondary"
    //       className="font-weight-bolder text-white"
    //       onClick={logout}
    //       style={{ marginLeft: "25px" }}
    //     >
    //       <img
    //         src={logoutIcon}
    //         alt="logoutIcon"
    //         width="32"
    //         height="32"
    //         className="mr-2"
    //       />
    //     </Button>
    //   </p>

    //   <ul class="nav flex-column bg-white mb-0">
    //     <li class="nav-item">
    //       <a href="#" class="nav-link text-dark font-italic bg-light">
    //         <Nav.Link to="/dashboard" as={Link} style={{ color: "Black" }}>
    //           Dashboard
    //         </Nav.Link>
    //       </a>
    //     </li>
    //     <li class="nav-item">
    //       <a
    //         href="#"
    //         class="nav-link text-dark font-italic"
    //         style={{ background: "#f8f9fa" }}
    //       >
    //         <Nav.Link to="/about" as={Link} style={{ color: "Black" }}>
    //           About
    //         </Nav.Link>
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default NavbarMenu;
