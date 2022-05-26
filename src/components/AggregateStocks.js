import  classes from "../css/TableAlignment.module.css";

function AggregateStocks(props)
{
    const aggr=props.stockAggr!=null?props.stockAggr:{};

    return (      
        <div>
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
      )
}

export default AggregateStocks;