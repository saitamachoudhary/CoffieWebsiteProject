import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Component1 from "./Components/Component1";
import OurMenu from "./Components/OurMenu";
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

function App() {

  const router=createBrowserRouter([
    {path:'/',
     element:<Component1/>
    },
    {
      path:'/ourmenu',
      element:<OurMenu/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/gallery',
      element:<Gallery/>
    },
    {
      path:'/contact',
      element:<Contact/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
