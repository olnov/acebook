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
import { SearchResultsPage } from "./pages/Search/SearchResultsPage";

// docs: https://reactrouter.com/en/main/start/overview
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
  // {
  //   path: "/main",
  //   element: <MainPage />
  // },
  {
    path: "/profile/:userId",
    element: <Profile />
  },
  {
    path: "/results",
    element: <SearchResultsPage />
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
