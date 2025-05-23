/** @format */

import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import PostPage from "../pages/PostPage";
import CreatePostPage from "../pages/CreatePostPage";
import LoginPage from "../pages/LoginPage";

function AppRouter() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PostPage />} /> 
            <Route path="create" element={<CreatePostPage />} /> 
            <Route path="login" element={<LoginPage />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default AppRouter;
