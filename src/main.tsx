import ReactDOM from 'react-dom/client'
import Root from './routes/root.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom"
import MapLibs from './components/Maplibs.tsx'
import Birbs from './components/Birbs.tsx'
import ErrorPage from './error-page.tsx'

export const routes = [
  {path: "/", element: <Root />},
  
    {
      path: "Maplibs",
      element: <MapLibs />,
    },
    {
      path: "birbs",
      element: <Birbs />,
    }

]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Maplibs",
        element: <MapLibs />,
      },
      {
        path: "birbs",
        element: <Birbs />,
      },
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} future={{v7_startTransition: true}}/>
  // <React.StrictMode>
  // </React.StrictMode>,
)
