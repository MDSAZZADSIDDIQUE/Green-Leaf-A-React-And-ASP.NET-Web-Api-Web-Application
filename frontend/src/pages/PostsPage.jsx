import Box from "@mui/material/Box";
import axios from "axios";
import * as React from "react";
import DashboardLayout from "../components/DashboardLayout";
import PostCard from "../components/PostCard";

const PostsPage = () => {
  const [posts, setPosts] = React.useState(null);
  const getPosts = async () => {
    try {
      await axios
        .get("https://localhost:44369/api/getPost")
        .then((response) => setPosts(response.data));
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    getPosts();
  }, []);

  React.useEffect(() => {}, [posts]);

  return (
    <DashboardLayout title="Posts">
      {posts &&
        posts.map((post) => (
          <Box key={post.id} className="flex justify-center my-10">
            <PostCard posts={post} />
          </Box>
        ))}
    </DashboardLayout>
  );
};

export default PostsPage;
