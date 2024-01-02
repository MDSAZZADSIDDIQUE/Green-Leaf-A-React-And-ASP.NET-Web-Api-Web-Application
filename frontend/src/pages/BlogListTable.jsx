import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title" },
  { field: "sub_title", headerName: "Sub Title" },
  {
    field: "content_body",
    headerName: "Content Body",
  },
  {
    field: "published_at",
    headerName: "Published At",
  },
];

export default function BlogListTable() {
  const [rows, setRows] = React.useState(null);

  const getProductList = async () => {
    try {
      const response = await axios.get("https://localhost:44369/api/getblogs");
      setRows(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getProductList();
    console.log(rows);
  }, []);

  React.useEffect(() => {}, [rows]);

  return (
    rows && (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    )
  );
}
