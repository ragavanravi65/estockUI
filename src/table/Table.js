import {
  useTable,usePagination
} from "react-table/dist/react-table.development";
import { COLUMNS } from "./column";
import  classes from "../css/TableAlignment.module.css";
import React, {useMemo} from "react";
import { Button } from "react-bootstrap";

function Table(props) {
    const stock=props.stockValues.stock!=undefined? props.stockValues.stock:[];
    const aggr=props.stockValues.stockAggr;

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
      {aggr !== undefined ? (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>StockPrice(Minimum)</th>
                        <th>StockPrice(Maximum)</th>
                        <th>StockPrice(Average)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{aggr.minStockValue}</td>
                        <td>{aggr.maxStockValue}</td>
                        <td>{aggr.avgStockValue}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      ) : (
        <div className={classes.altStatement}>Select date interval for values...</div>
      )}
    </div>
  );
}

export default Table;
