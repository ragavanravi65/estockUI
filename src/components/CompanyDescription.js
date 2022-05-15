import classes from "../css/CompanyAlignment.module.css";
import CompanyContext from "../store/CompanyContext";
import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

function CompanyDescription() {
  const companyData = useContext(CompanyContext);
  const [companyloader, setCompanyVal] = useState({});
  useEffect(() => {
    setCompanyVal(companyData.companyDetails);
  }, [companyData.companyDetails]);

  return (
    <Row className={classes.description}>
        <Col className={classes.bgBoxColor}>
      <p >Company Code </p>
      </Col >
       <Col className={classes.solutions}>
        {companyloader.company == undefined
          ? "Search for Companies..."
          : companyloader.company.companyCode}

      </Col>
      <Col className={classes.bgBoxColor} >
        <p>Company Name</p>
        </Col> 
        <Col  className={classes.solutions}>
          {companyloader.company == undefined
            ? "Search for Companies..."
            : companyloader.company.companyName}

      </Col>
    </Row>
  );
}
export default CompanyDescription;
