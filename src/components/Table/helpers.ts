import { ReactNode } from "react";
import { TColumn } from "../../types/Table";
// import { pick } from "../../utils/helperFunctions";

export const extractTableData = (
  dataList: any[],
  cols: TColumn[],
  rowKeyExtractor: Function
) => {
  // let requiredDataList = dataList.map((data) =>
  //   pick(
  //     data,
  //     cols.map((col) => col.key)
  //   )
  // );

  const rows = [];

  for (let i = 0; i < dataList.length; i++) {
    let data = dataList[i];
    let rowKey: string = rowKeyExtractor(data);

    let rowData = {
      key: rowKey,
      data: [] as ReactNode[],
    };

    for (let j = 0; j < cols.length; j++) {
      rowData.data.push(
        cols[j].render ? cols[j].render?.(data[cols[j].key]) : data[cols[j].key]
      );
    }
    rows.push(rowData);
  }
  return rows;
};
