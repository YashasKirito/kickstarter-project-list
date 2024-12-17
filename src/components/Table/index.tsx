import { FC, useMemo } from "react";
import { ITable } from "../../types/Table";
import { extractTableData } from "./helpers";
import "./styles.css";

const Table: FC<ITable> = ({ dataSet, columns, rowKeyExtractor }) => {
  const tableData = useMemo(() => {
    return extractTableData(dataSet, columns, rowKeyExtractor);
  }, [dataSet, columns, rowKeyExtractor]);

  return (
    <table className="table_container">
      <thead>
        <tr className="table_head table_row">
          {columns.map((col) => (
            <th key={col.key}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr className="table_row" key={row.key}>
            {row.data.map((data, i) => (
              <td key={i}>{data}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
