import { useContext, useState } from "react";
import classes from "../css/Dropdown.module.css";
import CompanyContext from "../store/CompanyContext";

function DropDownCompany(props) {
  const companyArray = props.companyData;
  const [value, setValue] = useState("Default");

  const handleChange = (event) => {
    setValue(event.target.value);
    updateContextData(event.target.value);
  };

  const contextUpdater= useContext(CompanyContext);

  function updateContextData(val) {
    var companyOutput=companyArray.filter((companyObj)=>companyObj.company.companyCode==val)
    contextUpdater.addCompany(companyOutput[0]);
  }

  return (
    <div>
      <div className={classes.dropdown}>
        <select value={value} onChange={handleChange} className={classes.dropbtn}>
          <option value="Default">Default</option>
          {companyArray.map((option) => (
            <option value={option.company.companyCode}>{option.company.companyCode}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropDownCompany;
