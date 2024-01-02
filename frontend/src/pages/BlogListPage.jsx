import * as React from "react";
import DashboardLayout from "../components/DashboardLayout";
import BlogListTable from "./BlogListTable";

const BlogListPage = () => {
  return (
    <DashboardLayout title="Blog List">
      <BlogListTable />
    </DashboardLayout>
  );
};

export default BlogListPage;
