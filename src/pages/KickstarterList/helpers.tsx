import { TColumn } from "../../types/Table";
import { priceFormatter } from "../../utils/price";

export const cols: TColumn[] = [
  {
    title: "Sl Number",
    key: "s.no",
    render: (val) => {
      return `#${val}`;
    },
  },
  {
    title: "Percentage Funded ",
    key: "percentage.funded",
    render: (val) => {
      return (
        <div data-chip-type={val > 100 ? "green" : "red"} className="chip">
          {`${val}%`} {val > 100 ? <span>&uarr;</span> : <span>&darr;</span>}
        </div>
      );
    },
  },
  {
    title: "Amount Pledged 💸",
    key: "amt.pledged",
    render: (val) => priceFormatter(val),
  },
  {
    title: "Location",
    key: "location",
  },
];

export const rowKeyExtractor = (obj: any) => {
  return obj["s.no"];
};
