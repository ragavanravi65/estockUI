import classes from "../css/HeaderComponent.module.css";
import ApiFunction from "./ApiFunction";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import CompanyContext from "../store/CompanyContext";

import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

function HeaderComponent() {

  const [companySearch, setCompanySearch] = useState({
    companyCode: "",
  });

  const globalCompanyData = useContext(CompanyContext);

  function submit(e) {
    e.preventDefault();
    axios
      .get(
        "http://localhost:8080/api/v1.0/market/company/info/" +
          companySearch.companyCode
      )
      .then((response) => {
        updateContextData(response.data);
      });
  }

  function handle(e) {
    const newdata = { ...companySearch };
    newdata[e.target.id] = e.target.value;
    setCompanySearch(newdata);
  }

  function updateContextData(val) {
    globalCompanyData.addCompany(val);
  }

  return (
    <Row>
      <Col>
        <ApiFunction />
      </Col>
      <Col>
        <div className={classes.search}>
          <form onSubmit={(e) => submit(e)}>
            <input
              
              onChange={(e) => handle(e)}
              type="text"
              id="companyCode"
              placeholder="company code"
            className={classes.inputBox}/>
            <Button type="submit" variant="dark" className={classes.btnSize} size="lg">
              Search
            </Button>
          </form>
        </div>
      </Col>
    </Row>
  );
}

export default HeaderComponent;
