import DatePickerDesign from './DatePickerDesign';
import classes from "../css/CompanyAlignment.module.css";

function CompanyStocks(){

    return(
        <div className={classes.marginTop}>
             <DatePickerDesign/>
        </div>
    );
}


export default CompanyStocks;