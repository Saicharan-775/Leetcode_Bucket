import './App.css'
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NormalBucket from "./pages/NormalBucket";
import StrictBucket from "./pages/StrictBucket";
import Analysis from "./pages/Analysis";
import Resourse from "./pages/Resourse";
import MainLayout from "./layouts/MainLayouts";
import RevisionQueue from './pages/RevisionQueue';
import Settings  from './pages/Settings';
import  History  from './pages/ProblemHistory';
import DailyFlex from './pages/DailyFlex';
const approuter = createBrowserRouter([
  // Login route
  {
    path: "/login",
    element: <Login />,
  },
  // Default redirect (to dashboard)
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  // All routes that share Navbar
  {
    element: <MainLayout />, // 👈 Shared layout
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/normal-bucket", element: <NormalBucket /> },
      { path: "/strict-bucket", element: <StrictBucket /> },
      { path: "/analysis", element: <Analysis /> },
      { path: "/resourses", element: <Resourse /> },
      { path: "/revision-queue", element: <RevisionQueue /> },
     { path: "/settings", element: <Settings /> },
     { path: "/history", element: <History /> },
     { path: "/daily-flex", element: <DailyFlex /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={approuter} />;
}

export default App;
