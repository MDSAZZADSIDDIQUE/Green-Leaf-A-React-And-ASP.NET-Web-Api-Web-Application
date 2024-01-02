import axios from "axios";
import * as React from "react";
import DashboardLayout from "../components/DashboardLayout";
import PostCard from "../components/PostCard";

const PostsPage = () => {
  const [blogArticle, setBlogArticle] = React.useState(null);
  const getProductList = async () => {
    try {
      const response = await axios.get("https://localhost:44369/api/getPost");
      setBlogArticle(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getProductList();
    console.log(blogArticle);
  }, []);

  React.useEffect(() => {}, [blogArticle]);

  return (
    <DashboardLayout title="Posts">
      {blogArticle && blogArticle.map((post) => <PostCard posts={post} />)}
    </DashboardLayout>
  );
};

export default PostsPage;
