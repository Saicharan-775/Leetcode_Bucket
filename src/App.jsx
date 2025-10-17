
import './App.css'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import "./index.css";
import NormalBucket from './pages/NormalBucket'
import StrictBucket from './pages/StrictBucket'
import { createBrowserRouter,Navigate,RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Analysis from './pages/Analysis';
import Resourse from './pages/Resourse';
const approuter=createBrowserRouter([
  {
    path:"/",
    element:<Navigate to ="/dashboard"/>
  },
  {
    path:"/login",
    element:<Login/>,
  },{
    path:"/dashboard",
    element:
    <>
    <Navbar/>
     <Dashboard/>,
    </>
   
  },
  {
    path:"/normal-bucket",
    element:  <>
    <Navbar/>
     <NormalBucket/>,
    </>
  },
   {
    path:"/strict-bucket",
    element:  <>
    <Navbar/>
     <StrictBucket/>,
    </>
  },
  {
    path:"/analysis",
    element:  <>
    <Navbar/>
     <Analysis/>,
    </>
  },
  {
    path:"/resourses",
    element:  <>
    <Navbar/>
     <Resourse/>,
    </>
  },
])
function App() {
  return  <RouterProvider router={approuter} />;
  
}

export default App
