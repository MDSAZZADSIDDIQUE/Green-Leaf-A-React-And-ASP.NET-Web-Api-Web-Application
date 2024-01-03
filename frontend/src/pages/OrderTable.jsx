import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import * as React from "react";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "date", headerName: "Date" },
  { field: "status", headerName: "Status" },
  {
    field: "amount",
    headerName: "amount",
    type: "number",
  },
  {
    field: "user_name",
    headerName: "User Name",
  },
  {
    field: "shipping_address",
    headerName: "Shipping Address",
  },
];

const OrderTable = () => {
  const [rows, setRows] = React.useState(null);

  const getProductList = async () => {
    try {
      const response = await axios.get("https://localhost:44369/api/order");
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
      <div style={{ height: 400, width: "100%" }} className="mt-10">
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

export default OrderTable;
