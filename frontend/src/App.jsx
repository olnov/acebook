
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import FeedPage from './pages/Feed/FeedPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import { LoginPage } from "./pages/Login/LoginPage";
import { SignupPage } from "./pages/Signup/SignupPage";
// import { FriendsPage } from "./pages/Friends/FriendsPage";
import { MainPage } from "./pages/Main/MainPage"


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

//   // { 
//   //   path: "/friends", 
//   //   element: <FriendsPage /> 
//   // },
//   // { path: "/search-friends", 
//   //   element: <SearchFriendsPage /> 
//   // },
//   {
//     path: "/main",
//     element: <MainPage />
//   }
// ]);


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/about-us" element={<AboutUsPage />} /> 
        {/* Add a catch-all route for 404 errors */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
