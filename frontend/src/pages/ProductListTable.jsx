import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import * as React from "react";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "description", headerName: "Description" },
  {
    field: "price",
    headerName: "Price",
    type: "number",
  },
  {
    field: "category",
    headerName: "Category",
  },
  {
    field: "status",
    headerName: "Status",
  },
  {
    field: "date_added",
    headerName: "Date Added",
  },
];

const ProductListTable = () => {
  const [rows, setRows] = React.useState(null);

  const getProductList = async () => {
    try {
      const response = await axios.get("https://localhost:44369/api/shop");
      setRows(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getProductList();
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

export default ProductListTable;
