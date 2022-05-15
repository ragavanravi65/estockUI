import { useState } from "react";
import CompanyDescription from "./CompanyDescription";
import classes from "../css/Dropdown.module.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

function DropDownCompany(props) {
  const companyArray = props.companyData;
  const [value, setValue] = useState("Default");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <div className={classes.dropdown}>
        <select value={value} onChange={handleChange} className={classes.dropbtn}>
          <option value="Default">Default</option>
          {companyArray.map((option) => (
            <option value={option.companyCode}>{option.companyCode}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropDownCompany;
