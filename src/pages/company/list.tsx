import {
  DateField,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

import { DataGrid, GridColumns } from "@mui/x-data-grid";

import { ICompany } from "interfaces";

export const CompanyList: React.FC = () => {
  const { dataGridProps } = useDataGrid<ICompany>();

  const {
    paginationMode,
    page,
    onPageChange,
    pageSize,
    onPageSizeChange,
    ...restDataGridProps
  } = dataGridProps;

  const columns = React.useMemo<GridColumns<any>>(
    () => [
      {
        field: "id",
        headerName: "ID",
        type: "number",
        width: 50,
      },
      { field: "name", headerName: "Name", minWidth: 400, flex: 1 },
      // {
      //   field: "createdAt",
      //   headerName: "Created At",
      //   minWidth: 250,
      //   renderCell: function render({ value }) {
      //     return <DateField format="YYYY-MM-DD HH:mm:ssZ" value={value} />;
      //   },
      // },
      // {
      //   field: "updatedAt",
      //   headerName: "Update At",
      //   minWidth: 250,
      //   renderCell: function render({ value }) {
      //     return <DateField format="YYYY-MM-DD HH:mm:ssZ" value={value} />;
      //   },
      // },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText size="small" recordItemId={row.id} />
              <ShowButton hideText size="small" recordItemId={row.id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    []
  );

  return (
    <List>
      <DataGrid
        {...dataGridProps}
        columns={columns}
        {...restDataGridProps}
        paginationMode={paginationMode}
        page={page}
        onPageChange={onPageChange}
        pageSize={pageSize}
        onPageSizeChange={onPageSizeChange}
        autoHeight
        rowsPerPageOptions={[10, 25, 30, 50, 100]}
      />
    </List>
  );
};
