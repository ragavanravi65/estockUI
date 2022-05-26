import {
  useTable,usePagination
} from "react-table/dist/react-table.development";
import { COLUMNS } from "./column";
import  classes from "../css/TableAlignment.module.css";
import React, {useMemo} from "react";
import { Button } from "react-bootstrap";
import AggregateStocks from "../components/AggregateStocks";

function Table(props) {
    const stock=props.stockValues.stock!=undefined &&
    props.stockValues.stock!=null ? props.stockValues.stock:[];


    const columns=useMemo(()=>COLUMNS,[])
    const datas=useMemo(()=>props.stockValues.stock!=undefined? props.stockValues.stock:[],[props])

    const tableInstinct=    useTable({
        columns: columns,
        data: datas, initialState: { pageSize: 5 } 
      },usePagination);
  const { getTableProps, getTableBodyProps, headerGroups,page,previousPage,nextPage,prepareRow } =tableInstinct;

  return (
    <div>
      <table {...getTableProps()} responsive>
        <thead>
          {headerGroups.map((headergroup) => (
            <tr {...headergroup.getHeaderGroupProps()}>
              {headergroup.headers.map((columns) => (
                <th {...columns.getHeaderProps()}>
                  {columns.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={classes.altStatement}>
          <Button onClick={()=>previousPage()}variant="outline-dark">previous</Button>{' '}
          <Button  onClick={()=>nextPage()} variant="outline-dark">next</Button>
      </div>
          <AggregateStocks stockAggr={props.stockValues.stockAggr}/>
    </div>
  );
}

export default Table;
