import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import AddCoffee from './components/AddCoffee/AddCoffee.jsx'
import CoffeeDetail from './components/CoffeeDetail/CoffeeDetail.jsx'
import CoffeeEdit from './components/CoffeeEdit/CoffeeEdit.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: 'add-coffee',
        element: <AddCoffee />
      },
      {
        path: 'detail/:id',
        element: <CoffeeDetail />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      {
        path: 'edit/:id',
        element: <CoffeeEdit />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
