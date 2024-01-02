import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AddProductPage from "./pages/AddProductPage.jsx";
import BlogListPage from "./pages/BlogListPage.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CreatePostPage from "./pages/CreatePostPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import OrderListPage from "./pages/OrderListPage.jsx";
import PostListPage from "./pages/PostListPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import ProductListPage from "./pages/ProductListPage.jsx";
import PublishBlogPage from "./pages/PublishBlogPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import UserDashboardPage from "./pages/UserDashboardPage.jsx";
import YourOrderListPage from "./pages/YourOrderListPage.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import ProductPage from "./pages/ProductPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/userdashboard" element={<UserDashboardPage />} />
      <Route path="/addproduct" element={<AddProductPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/productlist" element={<ProductListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/publishBlog" element={<PublishBlogPage />} />
      <Route path="/createpost" element={<CreatePostPage />} />
      <Route path="/yourorder" element={<YourOrderListPage />} />
      <Route path="/order" element={<OrderListPage />} />
      <Route path="/blogList" element={<BlogListPage />} />
      <Route path="/postlist" element={<PostListPage />} />
      <Route path="/blogpostpage/:blogID" element={<BlogPostPage />} />
      <Route path="/productpage/:productID" element={<ProductPage />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
