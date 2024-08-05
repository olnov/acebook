import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import FeedPage from './pages/Feed/FeedPage';
import AboutUsPage from './pages/AboutUs/AboutUsPage';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';
import LandingPage from './pages/LandingPage/LandingPage';
import ResultsPage from './pages/Results/ResultsPage';
import ProfilePage from './pages/Profile/ProfilePage';


// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
// import { HomePage } from "./pages/Home/HomePage";
// import { LoginPage } from "./pages/Login/LoginPage";
// import { SignupPage } from "./pages/Signup/SignupPage";
// import { FeedPage } from "./pages/Feed/FeedPage";
// import { MainPage } from "./pages/Main/MainPage"
// import { Profile } from "./pages/Profile/ProfilePage";
// import { SearchResultsPage } from "./pages/Search/SearchResultsPage";

// // docs: https://reactrouter.com/en/main/start/overview
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/signup",
//     element: <SignupPage />,
//   },
//   {
//     path: "/posts",
//     element: <FeedPage />,
//   },
//   {
//     path: "/main",
//     element: <MainPage />
//   },
//   {
//     path: "/profile",
//     element: <Profile />
//   },
//   {
//     path: "/search-results",
//     element: <SearchResultsPage />
//   },
// ]);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/about-us" element={<AboutUsPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import "./App.css";
// import { HomePage } from "./pages/Home/HomePage";
// import { LoginPage } from "./pages/Login/LoginPage";
// import { SignupPage } from "./pages/Signup/SignupPage";
// import { FeedPage } from "./pages/Feed/FeedPage";
// import { FriendsPage } from "./pages/Friends/FriendsPage";
// import { MainPage } from "./pages/Main/MainPage"
// import { AuthContext } from "./context/AuthContext";


// // docs: https://reactrouter.com/en/main/start/overview
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/signup",
//     element: <SignupPage />,
//   },
//   {
//     path: "/posts",
//     element: <FeedPage />,
//   },

//   { 
//     path: "/friends", 
//     element: <FriendsPage /> 
//   },
//   // { path: "/search-friends", 
//   //   element: <SearchFriendsPage /> 
//   // },
//   {
//     path: "/main",
//     element: <MainPage />
//   }
// ]);

// const App = () => {
//   return (
//     <>

//       <RouterProvider router={router} />

//     </>
//   );
// };

export default App;

