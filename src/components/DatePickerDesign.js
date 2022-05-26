import React, { useEffect, useState } from "react";  
import { useContext } from "react";
import CompanyContext from "../store/CompanyContext";
import DatePicker from "react-datepicker";  
import 'react-datepicker/dist/react-datepicker.css'
import axios from "axios";
import Table from "../table/Table";
import { Button, Col, Row } from "react-bootstrap";
import classes from "../css/CompanyAlignment.module.css";


function DatePickerDesign(){

    const [startDate, setStartDate] = useState(new Date());  
    const [endDate,setendDate]=useState(new Date());
 

    const [companyloader,setCompanyVal]=useState({});
    const [stockData,setfetchedStock]=useState({});

    const companyData=useContext(CompanyContext);

    useEffect(()=>{
  setCompanyVal(companyData.companyDetails);
    },[companyData.companyDetails]);

    function getDate(date){
      var day = date.getDate();
      var month = date.getMonth()+1;
      var year = date.getFullYear();
      return year + '-' + month + '-' + day;
    }

    function getDetails(e){
      e.preventDefault();
      const companyCode=companyloader.company.companyCode
      axios.get('http://localhost:8081/api/v1.0/market/stock/get/'+companyCode+'/'+getDate(startDate)+'/'+getDate(endDate))
      .then(response=>{
        setfetchedStock(response.data);
        console.log(response.data)
              }
          );
    }
    return (  
      <div>
        <Row>
      <form onSubmit={e=>getDetails(e) }>
      <Col  className={classes.sameLine}>
      <h6><i>Start Date</i></h6> <DatePicker selected={startDate} 
      onChange={(date) => setStartDate(date)}
      dateFormat='yyyy-MM-dd'  maxDate={new Date()}/>  
      </Col>
      <Col className={classes.sameLine}>
      <h6><i>End Date</i></h6>  <DatePicker selected={endDate} 
      onChange={(date) => setendDate(date)}
      dateFormat='yyyy-MM-dd'
      minDate={startDate}  maxDate={new Date()}/> 
      </Col>
      <Col className={classes.sameLine}>
      <Button type="submit" variant="dark" size="sm">Submit</Button>
    </Col>
    </form>
    </Row>
    <br/>
    {stockData!=undefined ? <Table stockValues={stockData} /> : <div></div> }
    </div>
    );  

}

export default DatePickerDesign;