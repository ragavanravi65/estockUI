import { Container, Navbar } from "react-bootstrap";
import classes from "../css/HeaderComponent.module.css";

function MainNavigation(){

  function restartPage(){
    document.location.reload(true)
  }
    return(
        <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
      <Navbar.Brand href="#">
        <img
          alt=""
          src="growth.png"
          width="50"
          height="50"
        />
      <span className={classes.marginLogo} onClick={restartPage}>My E-stock Market</span>
      </Navbar.Brand>
    </Container>
  </Navbar>
    );
}

export default MainNavigation;