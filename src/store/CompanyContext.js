import {createContext,useState} from 'react';
import CompanyDetails from '../components/CompanyDetails';

// will create a react component context
 var CompanyContext=createContext({
    companyDetails:{},
    addCompany:
    (companyDet)=>{}
   
});  

export function CompanyContextProvider(props){
//manage state to execute again on state change
    const [fetchedCompany,setFetchedCompany]=useState([]);

    function addCompanyDetails(companyDet){
        setFetchedCompany(companyDet)
    }

    const context={
        companyDetails:fetchedCompany,
        addCompany:addCompanyDetails
    }
    return <CompanyContext.Provider value={context}>
        {props.children}
    </CompanyContext.Provider>
}

export default CompanyContext;

//create context--CompanyContext
//component to modify the context--CompanyContextProvider