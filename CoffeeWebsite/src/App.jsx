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
import NavBar from "./Components/NavBar";

function App() {

  const router=createBrowserRouter([
    {path:'/',
     element:<NavBar/>,
     children:[
      {
        path:'/',
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
     ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
