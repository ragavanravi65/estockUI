import DropDownCompany from "./Dropdown";
import {useEffect, useState} from 'react'; 
import axios from "axios";
import { Button } from "react-bootstrap";



function ApiFunction(){

const [isFetching,setIsFetching]=useState(true);
const [loadedCompanies,setLoadedCompanies]=useState([]);

//2 params function & array of dependencies
useEffect(()=>{
    setIsFetching(true);
    axios.get('http://estockcompany-demo-1.southindia.azurecontainer.io:8080/api/v1.0/market/company/getall')
.then(response=>{
        console.log(response.data);
            setIsFetching(false);  
            setLoadedCompanies(response.data);
        }
    );
},[]);

    if(isFetching){
        return (<div>
         <Button variant="dark" className="my-3">loading company dropdown...</Button>
        </div>
        )
    }
    else{
    return (
        <div>
            <DropDownCompany companyData={loadedCompanies}/>

            </div>
    );
    }
}

export default ApiFunction;