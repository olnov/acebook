import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { LoginPage } from "./pages/Login/LoginPage";
import { SignupPage } from "./pages/Signup/SignupPage";
import { FeedPage } from "./pages/Feed/FeedPage";
import { FriendsPage } from "./pages/Friends/FriendsPage";
import { MainPage } from "./pages/Main/MainPage"
import { AuthContext } from "./context/AuthContext";


// docs: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/posts",
    element: <FeedPage />,
  },

  { 
    path: "/friends", 
    element: <FriendsPage /> 
  },
  // { path: "/search-friends", 
  //   element: <SearchFriendsPage /> 
  // },
  {
    path: "/main",
    element: <MainPage />
  }
]);

const App = () => {
  return (
    <>

      <RouterProvider router={router} />

    </>
  );
};

export default App;
