import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import * as React from "react";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "created_at", headerName: "Created At" },
  { field: "caption", headerName: "Caption" },
];

const PostListTable = () => {
  const [rows, setRows] = React.useState(null);

  const getProductList = async () => {
    try {
      const response = await axios.get("https://localhost:44369/api/getPost");
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
};

export default PostListTable;
