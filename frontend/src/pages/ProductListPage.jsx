import * as React from "react";
import DashboardLayout from "../components/DashboardLayout";
import ProductListTable from "./ProductListTable";

const ProductListPage = () => {
  return (
    <DashboardLayout title="Product List">
      <ProductListTable />
    </DashboardLayout>
  );
};

export default ProductListPage;
