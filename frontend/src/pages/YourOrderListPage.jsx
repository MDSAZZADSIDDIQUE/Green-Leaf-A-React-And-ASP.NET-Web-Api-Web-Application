import * as React from "react";
import DashboardLayout from "../components/DashboardLayout";
import OrderListTable from "./OrderListTable";

const YourOrderListPage = () => {
  return (
    <DashboardLayout title="Your Orders">
      <OrderListTable />
    </DashboardLayout>
  );
};

export default YourOrderListPage;
