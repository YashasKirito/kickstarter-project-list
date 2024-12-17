import { useEffect, useMemo, useState } from "react";
import Table from "../../components/Table";
import { KickstarterDataUrl } from "../../constants/kickstarter";
import { useFetch } from "../../hooks/useFetch";
import { KickstarterProjectEntry } from "../../types/Kickstarter";
import { cols, rowKeyExtractor } from "./helpers";
import { TPaginationParams } from "../../types/Table";
import Pagination from "../../components/Paginaton";
import "./styles.css";

const KickstarterProjectsListPage = () => {
  const { data, error, isLoading } =
    useFetch<KickstarterProjectEntry[]>(KickstarterDataUrl);

  const [pagination, setPagination] = useState<TPaginationParams>({
    offset: 0,
    limit: 5,
    total: 0,
  });

  const tableData = useMemo(() => {
    if (data) {
      return data.slice(
        pagination.offset,
        pagination.offset + pagination.limit
      );
    } else {
      return [];
    }
  }, [pagination, data]);

  useEffect(() => {
    if (data) {
      setPagination((prev) => ({ ...prev, total: data.length }));
    }
  }, [data]);

  const updatePagination = (params: TPaginationParams) => {
    setPagination(params);
  };

  return (
    <div>
      <h1 className="text-2xl">Kickstarter Data</h1>
      <p className="text-muted text-sm mb-3">
        This is the list of all the latest and greatest Kiskstarter projects
      </p>

      {isLoading ? (
        "Loading..."
      ) : error ? (
        <div className="error">{error}</div>
      ) : tableData ? (
        <Table
          dataSet={tableData}
          columns={cols}
          rowKeyExtractor={rowKeyExtractor}
        />
      ) : (
        "No Data"
      )}

      <div className="table_footer | flex justify-between align-center mt-2">
        <p className="text-xs text-muted">
          Showing {pagination.offset + 1} -{" "}
          {pagination.offset + pagination.limit} of {pagination.total} results
        </p>
        <Pagination
          pagination={pagination}
          updatePagination={updatePagination}
        />
      </div>
    </div>
  );
};

export default KickstarterProjectsListPage;
