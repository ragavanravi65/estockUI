import DropDownCompany from "./Dropdown";
import {useEffect, useState} from 'react'; 
import axios from "axios";



function ApiFunction(){

const [isFetching,setIsFetching]=useState(true);
const [loadedCompanies,setLoadedCompanies]=useState([]);

//2 params function & array of dependencies
useEffect(()=>{
    setIsFetching(true);
    axios.get('http://localhost:8080/api/v1.0/market/company/getall')
.then(response=>{
        console.log(response.data);
            setIsFetching(false);  
            setLoadedCompanies(response.data);
        }
    );
},[]);

    if(isFetching){
        return (<div>
      loading...
        </div>
        )
    }
    else{
        const companyCodes=[];
        for(var i=0;i<loadedCompanies.length;i++){
            companyCodes[i]=loadedCompanies[i].company;
        }
    return (
        <div>
            <DropDownCompany companyData={companyCodes}/>

            </div>
    );
    }
}

export default ApiFunction;