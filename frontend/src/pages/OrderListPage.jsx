import * as React from "react";
import DashboardLayout from "../components/DashboardLayout";
import OrderTable from "./OrderTable";

const OrderListPage = () => {
  return (
    <DashboardLayout title="Order List">
      <OrderTable />
    </DashboardLayout>
  );
};

export default OrderListPage;
