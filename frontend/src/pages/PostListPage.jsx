import * as React from "react";
import DashboardLayout from "../components/DashboardLayout";
import PostListTable from "./PostListTable";

const PostListPage = () => {
  return (
    <DashboardLayout title="Post List">
      <PostListTable />
    </DashboardLayout>
  );
};

export default PostListPage;
