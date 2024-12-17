import { ReactNode } from "react";

export interface ITable {
  dataSet: object[];
  columns: TColumn[];
  rowKeyExtractor: (obj: any) => string;
}

export interface TColumn {
  title: string;
  key: string;
  render?: (val: any) => ReactNode;
}

export interface TPaginationParams {
  offset: number;
  limit: number;
  total: number;
}
