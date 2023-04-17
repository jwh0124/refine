import { List, useDataGrid } from "@refinedev/mui";
import React from "react";

import { DataGrid, GridColumns } from "@mui/x-data-grid";

import { ITag } from "interfaces";

export const TagList: React.FC = () => {
  const { dataGridProps } = useDataGrid<ITag>();

  const columns = React.useMemo<GridColumns<ITag>>(
    () => [
      {
        field: "id",
        headerName: "ID",
        type: "number",
        width: 50,
      },
      { field: "name", headerName: "Name", minWidth: 400, flex: 1 },
    ],
    []
  );

  return (
    <List>
      <DataGrid
        {...dataGridProps}
        columns={columns}
        autoHeight
        rowsPerPageOptions={[10, 25, 30, 50, 100]}
      />
    </List>
  );
};
