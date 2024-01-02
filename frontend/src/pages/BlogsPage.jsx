import axios from "axios";
import * as React from "react";
import DashboardLayout from "../components/DashboardLayout";
import Blog from "./blog/Blog";

const BlogsPage = () => {
  const [rows, setRows] = React.useState(null);

  const getProductList = async () => {
    try {
      const response = await axios.get("https://localhost:44369/api/shop");
      setRows(response.data);
      console.log(rows);
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
    <DashboardLayout title="Blogs">
      <Blog />
    </DashboardLayout>
  );
};

export default BlogsPage;
