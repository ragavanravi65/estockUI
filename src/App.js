import { Container } from "react-bootstrap";
import HeaderComponent from "./components/HeaderComponent";
import MainNavigation from "./components/MainNavigation";
import CompanyDetails from "./components/CompanyDetails";
function App() {

  
  return (
    <Container>
    <div>
      <MainNavigation/>
      <HeaderComponent />
      <CompanyDetails />
    </div>
    </Container>
  );
}

export default App;
