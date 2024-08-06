import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import LandingPage from './pages/LandingPage/LandingPage';
import { FeedPage } from "./pages/Feed/FeedPage";
import AboutUsPage from './pages/AboutUs/AboutUsPage';
import { FriendsPage } from "./pages/Friends/FriendsPage";
import { Profile } from "./pages/Profile/ProfilePage";
import './index.css'; // Assuming your global styles are here

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/feed",
    element: <FeedPage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  { 
    path: "/friends", 
    element: <FriendsPage /> 
  },
  {
    path: "/profile/:userId",
    element: <Profile />
  },
]);

const App = () => {

  return (
    <>

      <RouterProvider router={router} />
    
    </>
  );
};

export default App;
